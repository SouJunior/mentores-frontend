import { Button } from '@/shared/components/button';
import { Modal } from '@/shared/components/modal';
import { Slider } from '@/shared/components/ui/slider';
import { useEditPhotoContext } from '@/shared/context/EditPhotoContext';
import { Minus, Plus } from 'phosphor-react';
import React, { useState } from 'react';
import Cropper, { Area } from 'react-easy-crop';

interface ModalImageEditorProps extends React.HTMLAttributes<HTMLDivElement> {
  onSave?: (croppedImage: string | null) => void;
}

const ModalImageEditor = ({ onSave, ...props }: ModalImageEditorProps) => {
  const { crop, setCrop, zoom, setZoom, originalImage } = useEditPhotoContext();
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    const x = croppedAreaPixels.x;
    const y = croppedAreaPixels.y;
    const width = croppedAreaPixels.width;
    const height = croppedAreaPixels.height;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      const image = new Image();
      image.src = originalImage || '';
      ctx.drawImage(image, x, y, width, height, 0, 0, width, height);
      const croppedImageUrl = canvas.toDataURL('image/jpeg');
      setCroppedImage(croppedImageUrl);
    }
  };

  const handlePLusZoom = () => setZoom(zoom + 0.2);
  const handleMenusZoom = () => setZoom(zoom - 0.2);
  const handleSaveClick = () => onSave?.(croppedImage);

  return (
    <Modal.Content
      className="flex flex-col items-center gap-4 max-w-[24.18rem] w-full p-6 relative"
      {...props}
    >
      <Modal.Title className="font-medium text-xl leading-6 text-black-200 mr-auto">
        Editar foto
      </Modal.Title>
      <Modal.Close className="top-6 right-6" />

      <div className="relative w-75 h-75 overflow-hidden p-2.5">
        <Cropper
          image={originalImage}
          crop={crop}
          zoom={zoom}
          aspect={1}
          cropShape="round"
          showGrid={false}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          objectFit="horizontal-cover"
        />
      </div>

      <div className="w-full">
        <span className="font-normal text-base leading-[1.4rem] text-black-200 mr-auto">
          Zoom
        </span>
        <div className="flex items-center gap-3 w-full">
          <span
            onClick={handleMenusZoom}
            className="cursor-pointer w-4 h-4 text-black-200"
          >
            <Minus />
          </span>
          <Slider
            value={[zoom]}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onValueChange={values =>
              setZoom(Array.isArray(values) ? values[0] : values)
            }
          />
          <span
            onClick={handlePLusZoom}
            className="cursor-pointer w-4 h-4 text-black-200"
          >
            <Plus />
          </span>
        </div>
      </div>

      <div className="w-full h-px bg-gray-700 mt-1" />

      <div className="flex justify-end w-full gap-4">
        <Modal.Close asChild>
          <Button variant="tertiary">Descartar</Button>
        </Modal.Close>

        <Modal.Close asChild>
          <Button
            className="bg-blue-800 text-white leading-[0.7]"
            onClick={handleSaveClick}
          >
            Salvar
          </Button>
        </Modal.Close>
      </div>
    </Modal.Content>
  );
};

export default ModalImageEditor;
