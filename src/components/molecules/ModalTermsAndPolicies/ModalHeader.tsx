import souJuniorLogoBlack from '@/assets/logos/sou-junior-black.svg'
import { ModalHeaderContainer, ModalLogo } from './styles'

export function ModalHeader() {
  return (
    <ModalHeaderContainer>
      <ModalLogo
        src={souJuniorLogoBlack}
        alt="Logo da SouJunior"
        width={248}
        height={40}
        quality={100}
      />
    </ModalHeaderContainer>
  )
}
