import { Terms } from "../FormRegister/text";
import {
  ModalBox,
  ModalBoxParagraph,
  ModalBoxSubTitle,
  ModalBoxTitle,
  ModalHash,
  ModalLogo,
} from "./style";

import { Modal } from "@/components/atoms/Modal";

interface ModalTermsProps {
  open: boolean;
  onClose: () => void;
  height: number;
  width: number;
}

export default function ModalTerms({
  open,
  onClose,
  height,
  width,
}: ModalTermsProps) {
  return (
    <Modal open={open} onClose={onClose} height={height} width={width}>
      <ModalLogo src="logos/LogoSJ.svg" />
      <ModalHash>#MovimentoSouJunior</ModalHash>
      <ModalBox>
        <ModalBoxTitle>{Terms.title}</ModalBoxTitle>
        <ModalBoxParagraph>{Terms.mainParagraph}</ModalBoxParagraph>
        <ModalBoxSubTitle>{Terms.subtitle1}</ModalBoxSubTitle>
        {Terms.paragraphsTerms.map((paragrafo) => (
          <ModalBoxParagraph key={paragrafo}>{paragrafo}</ModalBoxParagraph>
        ))}
        <ModalBoxSubTitle>{Terms.subtitle2}</ModalBoxSubTitle>
        {Terms.Indemnityparagraphs.map((paragrafo) => (
          <ModalBoxParagraph key={paragrafo}>{paragrafo}</ModalBoxParagraph>
        ))}
        <ModalBoxSubTitle>{Terms.subtitle3}</ModalBoxSubTitle>
        {Terms.paragraphsProvisions.map((paragrafo) => (
          <ModalBoxParagraph key={paragrafo}>{paragrafo}</ModalBoxParagraph>
        ))}
        <ModalBoxParagraph>{Terms.doubt}</ModalBoxParagraph>
      </ModalBox>
    </Modal>
  );
}
