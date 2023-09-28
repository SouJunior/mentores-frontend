import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { Point, Area } from "react-easy-crop";
import { Slider } from "@mui/material";
import {
  Container,
  CropContainer,
  Controls,
  SaveButton,
  ControlButton,
  CropInfo,
  StyledHR,
  CancelButtom,
  ButtomsContainer,
} from "./styled";
import { Modal } from "../Modal";

const ModalImageEditor: React.FC<{
  src?: string;
  onSave?: (croppedImage: string | null) => void;
  isOpen: boolean;
  onClose: () => void;
}> = ({ src, onSave, isOpen, onClose }) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    const x = croppedAreaPixels.x;
    const y = croppedAreaPixels.y;
    const width = croppedAreaPixels.width;
    const height = croppedAreaPixels.height;

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      const image = new Image();
      image.src = src || "";

      ctx.drawImage(image, x, y, width, height, 0, 0, width, height);

      const croppedImageUrl = canvas.toDataURL("image/jpeg");

      setCroppedImage(croppedImageUrl);
    }
  };

  const handlePLusZoom = () => {
    const zoomIncrement = zoom + 0.2;
    setZoom(zoomIncrement);
  };

  const handleMenusZoom = () => {
    const zoomIncrement = zoom - 0.2;
    setZoom(zoomIncrement);
  };

  const handleSaveClick = () => {
    if (onSave) {
      onSave(croppedImage);
    }
    onClose();
  };

  return (
    <Modal
      bgColor="white"
      height={528}
      width={387}
      open={isOpen}
      onClose={onClose}
    >
      <Container>
        <CropInfo>Editar foto</CropInfo>
        <CropContainer>
          <Cropper
            image={src}
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
        </CropContainer>
        <CropInfo>Zoom</CropInfo>
        <Controls>
          <ControlButton onClick={handleMenusZoom}>-</ControlButton>
          <Slider
            style={{ color: "#003986", width: "200px" }}
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e, zoom) => setZoom(Number(zoom))}
          />
          <ControlButton onClick={handlePLusZoom}>+</ControlButton>
        </Controls>
        <StyledHR />
        <ButtomsContainer>
          <CancelButtom onClick={onClose}>Descartar</CancelButtom>
          <SaveButton onClick={handleSaveClick}>Salvar</SaveButton>
        </ButtomsContainer>
      </Container>
    </Modal>
  );
};

export default ModalImageEditor;
