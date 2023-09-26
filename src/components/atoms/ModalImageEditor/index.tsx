import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { Point, Area } from "react-easy-crop";
import { Slider } from "@mui/material";
import {
  Container,
  CropContainer,
  CropImage,
  Controls,
  SaveButton,
} from "./styled";
import { Modal } from "../Modal";

const ModalImageEditor: React.FC<{
  src?: string;
  onSave?: (croppedImage: string) => void;
  isOpen: boolean;
  onClose: () => void;
}> = ({ src, onSave, isOpen, onClose }) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    console.log(croppedArea, croppedAreaPixels);
  };

  return (
    <Modal height={528} width={387} open={isOpen} onClose={onClose}>
      <Container>
        <CropContainer>
          <Cropper
            image={src}
            crop={crop}
            zoom={zoom}
            aspect={4 / 3}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </CropContainer>
        <Controls>
          <Slider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e, zoom) => setZoom(Number(zoom))}
          />
          {/* <SaveButton onClick={() => onSave(src)}>Salvar</SaveButton> */}
        </Controls>
      </Container>
    </Modal>
  );
};

export default ModalImageEditor;
