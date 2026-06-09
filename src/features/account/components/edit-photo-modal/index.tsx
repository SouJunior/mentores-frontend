import ModalImageEditor from '@/features/account/components/modal-image-editor';
import PhotoButton from '@/features/account/components/photo-button';
import { Button } from '@/shared/components/button';
import { Modal } from '@/shared/components/modal';
import { useEditPhotoContext } from '@/shared/context/EditPhotoContext';
import { handleError } from '@/shared/utils/handleError';
import { Camera, PencilSimple } from 'phosphor-react';

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

  const MAX_IMAGE_SIZE = 8 * 1024 * 1024;
  const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png'];

  const handleAddPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > MAX_IMAGE_SIZE) {
        handleError(
          'A foto selecionada ultrapassa o tamanho permitido. Tamanho máximo aceito 8MP'
        );
        return;
      }
      if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
        handleError(
          'A foto deve estar em um dos formatos permitidos. Formatos aceitos: jpg ou png.'
        );
        return;
      }
      const reader = new FileReader();
      reader.onload = e => {
        if (onAddPhoto) onAddPhoto(e.target?.result as string);
        setOriginalImage(e.target?.result as string);
        setCrop({ x: 0, y: 0 });
        setZoom(1);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSavePhoto = (editedImage: string | null) => {
    if (selectedPhoto && onAddPhoto) onAddPhoto(selectedPhoto);
    if (onImageEdit) onImageEdit(editedImage);
  };

  return (
    <Modal.Content
      className="flex flex-col gap-4 max-w-96.75 w-full p-6 relative"
      {...props}
    >
      <Modal.Title className="w-full text-xl font-medium leading-6 text-left">
        Insira sua foto
      </Modal.Title>
      <Modal.Close className="top-6 right-6" />

      <div className="flex flex-col items-center gap-8">
        <PhotoButton size={128} selectedPhoto={selectedPhoto} />

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

          <button className="flex-1 flex flex-col items-center justify-center py-2 px-3 bg-gray-200 rounded-lg border-0 cursor-pointer text-gray-700 font-semibold leading-[1.2rem] text-base [&_svg]:w-6 [&_svg]:h-6 [&_svg]:fill-gray-700">
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
