import PhotoButtom from "@/components/atoms/PhotoButtom";
import { Dotted, StyledImportant, StyledInfo } from "./styled";
import { useState } from "react";
import EditPhotoModal from "@/components/atoms/EditPhotoModal";

export default function MentorPhoto() {

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeModal = () => setIsEditModalOpen(false)
  return (
    <>
      <Dotted>
        <PhotoButtom onClick={handleOpenEditModal}/>
        <StyledImportant>
          Para inserir sua foto, clique aqui.<span className="last">*</span>
        </StyledImportant>
        <StyledInfo>Formato aceito: jpg ou png. Tamanho máx.: 8 MB.</StyledInfo>
      </Dotted>

      <EditPhotoModal isOpen={isEditModalOpen}  onClose={closeModal}/>
    </>
  );
}
