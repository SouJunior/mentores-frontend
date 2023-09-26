import PhotoButtom from "@/components/atoms/PhotoButtom";
import { Dotted, StyledImportant, StyledInfo } from "./styled";
import { useState } from "react";
import EditPhotoModal from "@/components/atoms/EditPhotoModal";

export default function MentorPhoto() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeModal = () => setIsEditModalOpen(false);

  const handleImageEdit = (editedImage: string | null) => {
    setSelectedPhoto(editedImage);
  };

  return (
    <>
      <Dotted>
        <PhotoButtom
          size={80} 
          selectedPhoto={selectedPhoto}
          onClick={handleOpenEditModal}
        />
        <StyledImportant>
          Para inserir sua foto, clique aqui.<span className="last">*</span>
        </StyledImportant>
        <StyledInfo>Formato aceito: jpg ou png. Tamanho máx.: 8 MB.</StyledInfo>
      </Dotted>
      <EditPhotoModal
        isOpen={isEditModalOpen}
        onAddPhoto={(photo) => setSelectedPhoto(photo)}
        onClose={closeModal}
        onImageEdit={handleImageEdit}
        onEditPhoto={() => handleOpenEditModal()} 
      />
    </>
  );
}
