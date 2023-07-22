import { Card } from "@/components/atoms/Card";
import { MentorType } from "@/mockups/mentores";
import Image from "next/image";
import {
  CardButton,
  CardStack,
  CardStacks,
  CardSubtitle,
  CardTitle,
} from "./style";

interface CardMentorProps {
  mentor: MentorType;
}

export function CardMentor({ mentor }: CardMentorProps) {
  return (
    <Card height={443} justifyContent={"center"}>
      <Image
        src={mentor.image}
        width={150}
        height={150}
        style={{ borderRadius: "100%", objectFit: "cover" }}
        alt={mentor.name}
      />
      <CardTitle>{mentor.name}</CardTitle>
      <CardSubtitle>{mentor.role}</CardSubtitle>
      <CardStacks>
        {mentor.stacks.map((stack) => (
          <CardStack key={stack}>{stack}</CardStack>
        ))}
      </CardStacks>
      <CardButton>Agendar um horário</CardButton>
    </Card>
  );
}
