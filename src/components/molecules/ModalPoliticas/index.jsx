import ModalComponent from "@/components/atoms/ModalComponent"
import {
    ModalBox,
    ModalBoxParagrafo,
    ModalBoxSubTitulo,
    ModalBoxTitulo,
    ModalHash,
    ModalLogo,
  } from "./style";

  import { Politicas, Termos } from "../FormRegister/Text";


export default function ModalPoliticas({open,onClose, height}){
    return (
        <ModalComponent
        open={open}
        onClose={onClose}
        height={height}
      >
        <ModalLogo src="logos/LogoSJ.svg" />
        <ModalHash>#MovimentoSouJunior</ModalHash>
        <ModalBox>
          <ModalBoxTitulo>{Termos.titulo}</ModalBoxTitulo>
          {Politicas.paragrafos.map((paragrafo) => (
            <ModalBoxParagrafo key={paragrafo}>
              {paragrafo}
            </ModalBoxParagrafo>
          ))}
          <ModalBoxSubTitulo>{Politicas.subtitulo1}</ModalBoxSubTitulo>
          {Politicas.cookies.map((paragrafo) => (
            <ModalBoxParagrafo key={paragrafo}>
              {paragrafo}
            </ModalBoxParagrafo>
          ))}
          <ModalBoxSubTitulo>{Politicas.subtitulo2}</ModalBoxSubTitulo>
          {Politicas.alternativas.map((paragrafo) => (
            <ModalBoxParagrafo key={paragrafo}>
              {paragrafo}
            </ModalBoxParagrafo>
          ))}
          <ModalBoxSubTitulo>{Politicas.subtitulo3}</ModalBoxSubTitulo>
          <ModalBoxParagrafo>{Politicas.maisInfos}</ModalBoxParagrafo>
        </ModalBox>
      </ModalComponent>
    )
}