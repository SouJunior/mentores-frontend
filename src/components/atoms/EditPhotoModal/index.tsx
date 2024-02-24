import { Modal } from '@/components/atoms/Modal'
import {
  ButtonsContainer,
  EditPhotoContainer,
  StyledInfo,
  StyledHR,
  SaveButton,
  ActionButton,
  PhotoContainerActions,
  ModalCloseButton,
  ModalCloseSavePhoto,
} from './styled'
import PhotoButton from '../PhotoButton'
import ModalImageEditor from '../ModalImageEditor'
import { handleError } from '@/utils/handleError'
import { Camera, PencilSimple } from 'phosphor-react'
import { useEditPhotoContext } from '@/context/EditPhotoContext'
import { DialogContentProps } from '@radix-ui/react-dialog'

interface EditPhotoModalProps extends DialogContentProps {
  selectedPhoto: string | null
  onAddPhoto?: (photo: string | null) => void
  onImageEdit?: (editedImage: string | null) => void
}

export default function EditPhotoModal({
  onAddPhoto,
  onImageEdit,
  selectedPhoto = null,
  ...props
}: EditPhotoModalProps) {
  const { setCrop, setZoom, setOriginalImage } = useEditPhotoContext()

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
      reader.onload = (e) => {
        if (onAddPhoto) {
          onAddPhoto(e.target?.result as string)
        }
        setOriginalImage(e.target?.result as string)
        setCrop({ x: 0, y: 0 })
        setZoom(1)
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
  }

  return (
    <EditPhotoContainer {...props}>
      <StyledInfo>Insira sua foto</StyledInfo>
      <ModalCloseButton />

      <PhotoContainerActions>
        <PhotoButton size={128} selectedPhoto={selectedPhoto} />

        <ButtonsContainer>
          <Modal.Root>
            <Modal.Control asChild>
              <ActionButton disabled={!selectedPhoto}>
                <PencilSimple weight="bold" />
                Editar
              </ActionButton>
            </Modal.Control>

            <ModalImageEditor onSave={handleSavePhoto} />
          </Modal.Root>

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

      <ModalCloseSavePhoto asChild>
        <SaveButton
          disabled={!selectedPhoto}
          onClick={() => handleSavePhoto(selectedPhoto)}
        >
          Salvar
        </SaveButton>
      </ModalCloseSavePhoto>
    </EditPhotoContainer>
  )
}
