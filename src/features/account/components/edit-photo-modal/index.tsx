import ModalImageEditor from '@/features/account/components/modal-image-editor';
import PhotoButton from '@/features/account/components/photo-button';
import { Button } from '@/shared/components/button';
import { Modal } from '@/shared/components/modal';
import { useEditPhotoContext } from '@/shared/context/EditPhotoContext';
import { handleError } from '@/shared/utils/handleError';
import { Camera, PencilSimple } from 'phosphor-react';
import { useEffect, useRef, useState } from 'react';
import * as yup from 'yup';

interface EditPhotoModalProps extends React.HTMLAttributes<HTMLDivElement> {
  selectedPhoto: string | null;
  onAddPhoto?: (photo: string | null) => void;
  onImageEdit?: (editedImage: string | null) => void;
}

export default function EditPhotoModal({
  onAddPhoto,
  onImageEdit,
  selectedPhoto = null,
  ...props
}: EditPhotoModalProps) {
  const { setCrop, setZoom, setOriginalImage } = useEditPhotoContext();

  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const MAX_IMAGE_SIZE = 8 * 1024 * 1024;
  const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png'];

  const applyPhoto = (photo: string) => {
    onAddPhoto?.(photo);
    setOriginalImage(photo);
    setCrop({x: 0, y: 0});
    setZoom(1);
  }

  const imageFileSchema = yup
  .mixed<File>()
  .nullable()
  .notRequired()
  .test(
    'FILE_SIZE',
    'A foto selecionada ultrapassa o tamanho permitido. Tamanho máximo aceito 8MP', 
    file => !file || file.size <= MAX_IMAGE_SIZE)
  .test(
    'FILE_FORMAT', 
    'A foto deve estar em um dos formatos permitidos. Formatos aceitos: jpg ou png.', 
    file => !file || ALLOWED_IMAGE_TYPES.includes(file.type))

  const handleAddPhoto = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.currentTarget;
    const file = event.target.files?.[0];

    if (!file) return

    try {
      await imageFileSchema.validate(file, {abortEarly: false});
    } catch(error) {
      if(error instanceof yup.ValidationError) {
        const validationErros = error.inner.length > 0 ? error.inner : [error];

        validationErros.forEach(validationErros => {
          handleError(validationErros.message);
        });
        input.value = '';
        return;
      }

      throw error;
    }
    const reader = new FileReader();

    reader.onload = e => {
      const photo = e.target?.result;

      if(typeof photo !== 'string') {
        handleError('Não foi possível carregar a foto');
        return;
      }

      applyPhoto(photo);
    };

    reader.readAsDataURL(file);
    input.value = ''
  };

  const handleOpenCamera = async () => {
    setCameraError(null);

    if(!navigator.mediaDevices?.getUserMedia) {
     setCameraError('Seu navegador não suporta acesso à câmera.');
     return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
        },
        audio: false,
      }); 
      streamRef.current = stream;
      setIsCameraOpen(true);
    } catch {
      setCameraError(
        'Não foi possível acessar a câmera. Verifique as permissões do navegador.'
      );
    }
  };

  useEffect(() => {
    if(!isCameraOpen || !videoRef.current || !streamRef.current) {
      return;
    }
    videoRef.current.srcObject = streamRef.current;

    return () => {
      if(videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
  }, [isCameraOpen]);

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach(track => track.stop());
    streamRef.current = null;
    setIsCameraOpen(false);
  }

  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach(track => track.stop());
    };
  }, []);

  const handleCapturePhoto = () => {
    const video = videoRef.current;

    if(!video || video.videoWidth == 0 || video.videoHeight == 0){
      handleError('A câmera ainda não está pronta.');
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');

    if(!context) {
      handleError('Não foi possível capturar a foto.');
      return;
    }

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const photo = canvas.toDataURL('image/jpeg', 0.9);

    applyPhoto(photo);
    stopCamera();
  };

  const handleSavePhoto = (editedImage: string | null) => {
    if (selectedPhoto && onAddPhoto) onAddPhoto(selectedPhoto);
    if (onImageEdit) onImageEdit(editedImage);
  };

  return (
    <Modal.Content
      className="flex flex-col gap-4 max-w-96.75 w-full p-6"
      {...props}
    >
      <Modal.Title className="w-full text-xl font-medium leading-6 text-left">
        Insira sua foto
      </Modal.Title>
      <Modal.Close className="top-6 right-6" />

      <div className="flex flex-col items-center gap-8">
        <PhotoButton size={128} selectedPhoto={selectedPhoto} />

        {isCameraOpen && (
          <div className='flex w-full flex-col items-center gap-4'>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className='aspect-square w-full max-w-80 rounded-lg object-cover'
            />
            <div>
              <button
                type='button'
                onClick={handleCapturePhoto}
                className='flex-1 rounded-lg bg-blue-700 px-4 py-3 font-semibold text-white'
              >
                Tirar Foto
              </button>

              <button
                type='button'
                onClick={stopCamera}
                className='flex-1 rounded-lg bg-gray-200 px-4 py-3 font-semibold text-gray-700'
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

        {cameraError && (
          <p className='w-full text-sm text-red-500' role='alert'>
            {cameraError}
          </p>
        )}

      {!isCameraOpen && (
        <div className="w-full flex gap-4">
          <Modal.Root>
            <Modal.Control asChild>
              <button
                disabled={!selectedPhoto}
                className="flex-1 flex flex-col items-center justify-center py-2 px-3 bg-gray-200 rounded-lg border-0 cursor-pointer text-gray-700 font-semibold leading-[1.2rem] text-base [&_svg]:w-6 [&_svg]:h-6 [&_svg]:fill-gray-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-600"
              >
                <PencilSimple weight="bold" />
                Editar
              </button>
            </Modal.Control>
            <ModalImageEditor onSave={handleSavePhoto} />
          </Modal.Root>

          <button 
            type='button'
            onClick={handleOpenCamera}
            className="flex-1 flex flex-col items-center justify-center py-2 px-3 bg-gray-200 rounded-lg border-0 cursor-pointer text-gray-700 font-semibold leading-[1.2rem] text-base [&_svg]:w-6 [&_svg]:h-6 [&_svg]:fill-gray-700">
            <Camera weight="bold" />
            Câmera
          </button>
          <label className="flex-1 flex flex-col items-center justify-center py-2 px-3 bg-gray-200 rounded-lg border-0 cursor-pointer text-gray-700 font-semibold leading-[1.2rem] text-base [&_svg]:w-6 [&_svg]:h-6 [&_svg]:fill-black">
            <input
              type="file"
              accept="image/*"
              onChange={handleAddPhoto}
              className="hidden"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="var(--color-black)"
              viewBox="0 0 256 256"
            >
              <path d="M208,52H182.42L170,33.34A12,12,0,0,0,160,28H96a12,12,0,0,0-10,5.34L73.57,52H48A28,28,0,0,0,20,80V192a28,28,0,0,0,28,28H208a28,28,0,0,0,28-28V80A28,28,0,0,0,208,52Zm4,140a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H80a12,12,0,0,0,10-5.34L102.42,52h51.15L166,70.66A12,12,0,0,0,176,76h32a4,4,0,0,1,4,4Zm-40-56a12,12,0,0,1-12,12H140v20a12,12,0,0,1-24,0V148H96a12,12,0,0,1,0-24h20V104a12,12,0,0,1,24,0v20h20A12,12,0,0,1,172,136Z" />
            </svg>
            Adicionar
          </label>
        </div>
      )}

      </div>

      <div className="w-full h-px bg-gray-700 mt-1" aria-hidden />

      <Modal.Close asChild>
        <Button
          disabled={!selectedPhoto}
          onClick={() => handleSavePhoto(selectedPhoto)}
          className="ml-auto"
        >
          Salvar
        </Button>
      </Modal.Close>
    </Modal.Content>
  );
}
