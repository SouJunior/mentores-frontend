import { Modal } from '@/components/atoms/Modal'
import {
  ButtonsContainer,
  EditPhotoContainer,
  StyledButton,
  StyledInfo,
  StyledHR,
  NextButton,
  AddPhotoButton,
  EditButton,
} from './styled'
import PhotoButtom from '../PhotoButtom'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import ModeIcon from '@mui/icons-material/Mode'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import { useState } from 'react'
import ModalImageEditor from '../ModalImageEditor'
import { handleError } from '@/utils/handleError'

interface EditPhotoModalProps {
  isOpen: boolean
  onClose: () => void
  onAddPhoto?: (photo: string | null) => void
  onEditPhoto?: () => void
  onTakePhoto?: () => void
  hasSelectedPhoto?: boolean
  onImageEdit?: (editedImage: string | null) => void
}

export default function EditPhotoModal({
  isOpen,
  onAddPhoto,
  onClose,
  onEditPhoto,
  onImageEdit,
}: EditPhotoModalProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
  const [modalEditor, setModalEditor] = useState(false)

  const handleOpenEditModal = () => {
    if (onEditPhoto) {
      onEditPhoto()
    }
    setModalEditor(true)
  }

  const closeModal = () => setModalEditor(false)

  const MAX_IMAGE_SIZE = 8 * 1024 * 1024
  const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png']

  const handleAddPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      if (file.size > MAX_IMAGE_SIZE) {
        handleError(
          'A foto selecionada ultrapassa o tamanho permitido. Tamanho máximo aceito 8MP',
        )
        return
      }

      if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
        handleError(
          'A foto deve estar em um dos formatos permitidos. Formatos aceitos: jpg ou png.',
        )
        return
      }

      const reader = new FileReader()
      reader.onload = async (e) => {
        await setSelectedPhoto(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSavePhoto = (editedImage: string | null) => {
    if (selectedPhoto && onAddPhoto) {
      onAddPhoto(selectedPhoto)
    }
    if (onImageEdit) {
      onImageEdit(editedImage)
    }
    onClose()
  }

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
            <ModeIcon fontSize={'small'} className="icon" />
            Editar
          </EditButton>
          <StyledButton>
            <CameraAltIcon fontSize={'small'} className="icon" />
            Câmera
          </StyledButton>
          <AddPhotoButton>
            <input type="file" accept="image/*" onChange={handleAddPhoto} />
            <AddPhotoAlternateIcon fontSize={'small'} className="icon" />
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
  )
}
