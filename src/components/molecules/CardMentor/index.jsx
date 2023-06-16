import CardComponent from "@/components/atoms/CardComponent";
import React from "react";
import {
  CardAgendar,
  CardArea,
  CardImagem,
  CardSecaoAreas,
  CardSubtitulo,
  CardTitulo,
} from "./style";

export default function CardMentor({ imagem, nome, cargo, areas }) {
  return (
    <CardComponent width={"288px"} height={"443px"}>
      <CardImagem src={`images/${imagem}`} alt="imagem" />
      <CardTitulo>{nome}</CardTitulo>
      <CardSubtitulo>{cargo}</CardSubtitulo>
      <CardSecaoAreas>
        {areas.map((area) => (
          <CardArea>{area}</CardArea>
        ))}
      </CardSecaoAreas>
      <CardAgendar>Agendar um horário</CardAgendar>
    </CardComponent>
  );
}
