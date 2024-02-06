import React, { useState } from 'react'
import Cropper, { Point, Area } from 'react-easy-crop'
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
} from './styled'
import { Modal } from '../Modal'
import { Button } from '../Button'
import { useTheme } from 'styled-components'
import { Minus, Plus } from 'phosphor-react'

interface ModalImageEditorProps {
  src?: string
  onSave?: (croppedImage: string | null) => void
  isOpen: boolean
  onClose: () => void
}

const ModalImageEditor = ({
  src,
  onSave,
  isOpen,
  onClose,
}: ModalImageEditorProps) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
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
      image.src = src || ''

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
    onClose()
  }

  return (
    <Modal bgColor="white" width={387} open={isOpen} onClose={onClose}>
      <Container>
        <CropTitle>Editar foto</CropTitle>
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
          <Button variant="tertiary" onClick={onClose}>
            Descartar
          </Button>
          <Button onClick={handleSaveClick}>Salvar</Button>
        </ButtonsContainer>
      </Container>
    </Modal>
  )
}

export default ModalImageEditor
