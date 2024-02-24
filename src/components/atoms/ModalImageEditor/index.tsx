import React, { useState } from 'react'
import Cropper, { Area } from 'react-easy-crop'
import { Slider } from '@mui/material'
import {
  Container,
  CropContainer,
  Controls,
  ControlButton,
  CropInfo,
  StyledHR,
  ButtonsContainer,
  CropControlsContainer,
  CropTitle,
  ModalCloseBtn,
  ModalClose,
} from './styled'
import { Button } from '../Button'
import { useTheme } from 'styled-components'
import { Minus, Plus } from 'phosphor-react'
import { useEditPhotoContext } from '@/context/EditPhotoContext'
import { DialogContentProps } from '@radix-ui/react-dialog'

interface ModalImageEditorProps extends DialogContentProps {
  onSave?: (croppedImage: string | null) => void
}

const ModalImageEditor = ({ onSave, ...props }: ModalImageEditorProps) => {
  const { crop, setCrop, zoom, setZoom, originalImage } = useEditPhotoContext()
  const [croppedImage, setCroppedImage] = useState<string | null>(null)
  const { colors } = useTheme()

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    const x = croppedAreaPixels.x
    const y = croppedAreaPixels.y
    const width = croppedAreaPixels.width
    const height = croppedAreaPixels.height

    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')

    if (ctx) {
      const image = new Image()
      image.src = originalImage || ''

      ctx.drawImage(image, x, y, width, height, 0, 0, width, height)

      const croppedImageUrl = canvas.toDataURL('image/jpeg')

      setCroppedImage(croppedImageUrl)
    }
  }

  const handlePLusZoom = () => {
    const zoomIncrement = zoom + 0.2
    setZoom(zoomIncrement)
  }

  const handleMenusZoom = () => {
    const zoomIncrement = zoom - 0.2
    setZoom(zoomIncrement)
  }

  const handleSaveClick = () => {
    if (onSave) {
      onSave(croppedImage)
    }
  }

  return (
    <Container {...props}>
      <CropTitle>Editar foto</CropTitle>
      <ModalClose />

      <CropContainer>
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
      </CropContainer>

      <CropControlsContainer>
        <CropInfo>Zoom</CropInfo>
        <Controls>
          <ControlButton onClick={handleMenusZoom}>
            <Minus />
          </ControlButton>
          <Slider
            style={{ color: colors.blue[800] }}
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e, zoom) => setZoom(Number(zoom))}
          />
          <ControlButton onClick={handlePLusZoom}>
            <Plus />
          </ControlButton>
        </Controls>
      </CropControlsContainer>

      <StyledHR />

      <ButtonsContainer>
        <ModalCloseBtn asChild>
          <Button variant="tertiary">Descartar</Button>
        </ModalCloseBtn>

        <ModalCloseBtn asChild>
          <Button className="save-image-editor-btn" onClick={handleSaveClick}>
            Salvar
          </Button>
        </ModalCloseBtn>
      </ButtonsContainer>
    </Container>
  )
}

export default ModalImageEditor
