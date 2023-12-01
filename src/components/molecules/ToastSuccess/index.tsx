import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ArrowSuccess from '../../../assets/icons/arrowSuccess.svg'
import {
  BackgroundOverlay,
  ToastContainer,
  ContainerToastTitle,
  ContainerToastIcon,
  ContainerButton,
  ContainerContentToast,
  ContainerToastIconWrapper,
  ContainerToastIconClose,
} from './styles'
import CloseIcon from '@mui/icons-material/Close'
interface CustomToastProps {
  message: string
  onClose?: () => void
}

const ToastSuccess: React.FC<CustomToastProps> = ({ onClose }) => {
  const [visible, setVisible] = useState(true)

  const handleOverlayClick = () => {
    if (onClose) {
      onClose()
    }
    setVisible(false)
  }

  return (
    <>
      <BackgroundOverlay visible={visible} onClick={handleOverlayClick} />
      {visible && (
        <ToastContainer visible={visible}>
          <ContainerContentToast>
            <ContainerToastIconWrapper>
              <ContainerToastIcon>
                <Image src={ArrowSuccess} alt="Icone de Seta Sucesso" />
              </ContainerToastIcon>
              <ContainerToastIconClose>
                <CloseIcon
                  className="iconClose"
                  onClick={handleOverlayClick}
                  style={{ color: '#5D5F5D' }}
                />
              </ContainerToastIconClose>
            </ContainerToastIconWrapper>
            <ContainerToastTitle>
              Senha redefinida com sucesso!
            </ContainerToastTitle>
            <Link href={'/login'}>
              <ContainerButton>Ir para o login</ContainerButton>
            </Link>
          </ContainerContentToast>
        </ToastContainer>
      )}
    </>
  )
}

export default ToastSuccess
