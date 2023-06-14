import {
  ModalBox,
  ModalBoxParagrafo,
  ModalBoxSubTitulo,
  ModalBoxTitulo,
  ModalHash,
  ModalLogo,
} from "./style";

import { Termos } from "../FormRegister/Text";
import ModalComponent from "@/components/atoms/ModalComponent";

export default function ModalTerms({ open, onClose, height, width }) {
  return (
    <ModalComponent open={open} onClose={onClose} height={height} width={width}>
      <ModalLogo src="logos/LogoSJ.svg" />
      <ModalHash>#MovimentoSouJunior</ModalHash>
      <ModalBox>
        <ModalBoxTitulo>{Termos.titulo}</ModalBoxTitulo>
        <ModalBoxParagrafo>{Termos.paragrafoPrincipal}</ModalBoxParagrafo>
        <ModalBoxSubTitulo>{Termos.subtitulo1}</ModalBoxSubTitulo>
        {Termos.paragrafosTermos.map((paragrafo) => (
          <ModalBoxParagrafo key={paragrafo}>{paragrafo}</ModalBoxParagrafo>
        ))}
        <ModalBoxSubTitulo>{Termos.subtitulo2}</ModalBoxSubTitulo>
        {Termos.paragrafosIndenizacao.map((paragrafo) => (
          <ModalBoxParagrafo key={paragrafo}>{paragrafo}</ModalBoxParagrafo>
        ))}
        <ModalBoxSubTitulo>{Termos.subtitulo3}</ModalBoxSubTitulo>
        {Termos.paragrafosDisposicoes.map((paragrafo) => (
          <ModalBoxParagrafo key={paragrafo}>{paragrafo}</ModalBoxParagrafo>
        ))}
        <ModalBoxParagrafo>{Termos.duvida}</ModalBoxParagrafo>
      </ModalBox>
    </ModalComponent>
  );
}
