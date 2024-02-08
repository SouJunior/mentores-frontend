import { Modal } from '@/components/atoms/Modal'
import {
  ButtonsContainer,
  EditPhotoContainer,
  StyledInfo,
  StyledHR,
  SaveButton,
  ActionButton,
  PhotoContainerActions,
} from './styled'
import PhotoButton from '../PhotoButton'
import { useState } from 'react'
import ModalImageEditor from '../ModalImageEditor'
import { handleError } from '@/utils/handleError'
import { Camera, PencilSimple } from 'phosphor-react'

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
    <Modal open={isOpen} onClose={onClose} width={387} bgColor="#FFF">
      <EditPhotoContainer>
        <StyledInfo>Insira sua foto</StyledInfo>

        <PhotoContainerActions>
          <PhotoButton size={128} selectedPhoto={selectedPhoto} />

          <ButtonsContainer>
            <ActionButton
              disabled={!selectedPhoto}
              onClick={handleOpenEditModal}
            >
              <PencilSimple weight="bold" />
              Editar
            </ActionButton>
            <ActionButton>
              <Camera weight="bold" />
              Câmera
            </ActionButton>
            <ActionButton as="label">
              <input type="file" accept="image/*" onChange={handleAddPhoto} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M208,52H182.42L170,33.34A12,12,0,0,0,160,28H96a12,12,0,0,0-10,5.34L73.57,52H48A28,28,0,0,0,20,80V192a28,28,0,0,0,28,28H208a28,28,0,0,0,28-28V80A28,28,0,0,0,208,52Zm4,140a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H80a12,12,0,0,0,10-5.34L102.42,52h51.15L166,70.66A12,12,0,0,0,176,76h32a4,4,0,0,1,4,4Zm-40-56a12,12,0,0,1-12,12H140v20a12,12,0,0,1-24,0V148H96a12,12,0,0,1,0-24h20V104a12,12,0,0,1,24,0v20h20A12,12,0,0,1,172,136Z"></path>
              </svg>
              Adicionar
            </ActionButton>
          </ButtonsContainer>
        </PhotoContainerActions>

        <StyledHR aria-hidden />

        <SaveButton
          disabled={!selectedPhoto}
          onClick={() => handleSavePhoto(selectedPhoto)}
        >
          Salvar
        </SaveButton>
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
