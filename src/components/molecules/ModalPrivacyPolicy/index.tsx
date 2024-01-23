import { Modal } from '@/components/atoms/Modal'
import { Policies } from '../FormRegister/text'
import {
  ModalBox,
  ModalBoxParagrafo,
  ModalBoxSubTitulo,
  ModalBoxTitulo,
  ModalHash,
  ModalLogo,
} from './style'

interface ModalPrivacyPolicyProps {
  open: boolean
  onClose: () => void
  height: number
  width: number
}

export function ModalPrivacyPolicy({
  open,
  onClose,
  height,
  width,
}: ModalPrivacyPolicyProps) {
  return (
    <Modal open={open} onClose={onClose} height={height} width={width}>
      <ModalLogo src="logos/LogoSJ.svg" />
      <ModalHash>#MovimentoSouJunior</ModalHash>
      <ModalBox>
        <ModalBoxTitulo>{Policies.title}</ModalBoxTitulo>
        {Policies.paragraphs.map((paragrafo) => (
          <ModalBoxParagrafo key={paragrafo}>{paragrafo}</ModalBoxParagrafo>
        ))}
        <ModalBoxSubTitulo>{Policies.subtitle1}</ModalBoxSubTitulo>
        {Policies.cookies.map((paragrafo) => (
          <ModalBoxParagrafo key={paragrafo}>{paragrafo}</ModalBoxParagrafo>
        ))}
        <ModalBoxSubTitulo>{Policies.subtitle2}</ModalBoxSubTitulo>
        {Policies.alternatives.map((paragrafo) => (
          <ModalBoxParagrafo key={paragrafo}>{paragrafo}</ModalBoxParagrafo>
        ))}
        <ModalBoxSubTitulo>{Policies.subtitle3}</ModalBoxSubTitulo>
        <ModalBoxParagrafo>{Policies.moreInfo}</ModalBoxParagrafo>
      </ModalBox>
    </Modal>
  )
}
