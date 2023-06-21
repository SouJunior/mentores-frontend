import CardComponent from "@/components/atoms/CardComponent";
import React from "react";
import {
  CardStack,
  CardButton,
  CardImage,
  CardStacks,
  CardSubtitle,
  CardTitle,
} from "./style";

export default function CardMentor({ image, name, role, stacks }) {
  return (
    <CardComponent width={"288px"} height={"443px"}>
      <CardImage src={`images/${image}`} alt={name} />
      <CardTitle>{name}</CardTitle>
      <CardSubtitle>{role}</CardSubtitle>
      <CardStacks>
        {stacks.map((stack) => (
          <CardStack>{stack}</CardStack>
        ))}
      </CardStacks>
      <CardButton>Agendar um horário</CardButton>
    </CardComponent>
  );
}
