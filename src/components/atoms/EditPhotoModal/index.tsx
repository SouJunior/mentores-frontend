import { Modal } from "@/components/atoms/Modal";
import {
  ButtonsContainer,
  EditPhotoContainer,
  StyledButton,
  StyledInfo,
  StyledHR,
  NextButton,
  AddPhotoButton,
  EditButton,
} from "./styled";
import PhotoButtom from "../PhotoButtom";
import { Camera, ImagePlus, Pencil } from "lucide-react";
import { useState } from "react";
import ModalImageEditor from "../ModalImageEditor";

interface EditPhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPhoto?: (photo: string | null) => void;
  onEditPhoto?: () => void;
  onTakePhoto?: () => void;
  hasSelectedPhoto?: boolean;
  onImageEdit?: (editedImage: string | null) => void;
}

export default function EditPhotoModal({
  isOpen,
  onAddPhoto,
  onClose,
  onEditPhoto,
  onTakePhoto,
  hasSelectedPhoto,
  onImageEdit,
}: EditPhotoModalProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [modalEditor, setModalEditor] = useState(false);

  const handleOpenEditModal = () => {
    if (onEditPhoto) {
      onEditPhoto();
    }
    setModalEditor(true);
  };

  const closeModal = () => setModalEditor(false);

  const handleAddPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        await setSelectedPhoto(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSavePhoto = (editedImage: string | null) => {
    if (selectedPhoto && onAddPhoto) {
      onAddPhoto(selectedPhoto);
    }
    if (onImageEdit) {
      onImageEdit(editedImage);
    }
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      height={388}
      width={387}
      bgColor="#FFF"
    >
      <EditPhotoContainer>
        <StyledInfo>Insira sua foto</StyledInfo>
        <PhotoButtom size={128} selectedPhoto={selectedPhoto} />

        <ButtonsContainer>
          <EditButton disabled={!selectedPhoto} onClick={handleOpenEditModal}>
            <Pencil className="icon" />
            Editar
          </EditButton>
          <StyledButton>
            <Camera className="icon" />
            Câmera
          </StyledButton>
          <AddPhotoButton>
            <input type="file" accept="image/*" onChange={handleAddPhoto} />
            <ImagePlus className="icon" />
            Adicionar
          </AddPhotoButton>
        </ButtonsContainer>
        <StyledHR />
        <NextButton
          disabled={!selectedPhoto}
          onClick={() => handleSavePhoto(selectedPhoto)}
        >
          Salvar
        </NextButton>
      </EditPhotoContainer>
      <ModalImageEditor
        src={selectedPhoto || undefined}
        onSave={handleSavePhoto}
        isOpen={modalEditor}
        onClose={closeModal}
      />
    </Modal>
  );
}
