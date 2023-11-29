import { Card } from "@/components/atoms/Card";
import Image from "next/image";
import {
  CalendlyButton,
  CardImage,
  CardStack,
  CardStacks,
  CardSubtitle,
  CardTitle,
} from "./style";
import { IMentors } from "@/services/interfaces/IUseMentorsService";

interface CardMentorProps {
  mentor: IMentors;
}

export function CardMentor({ mentor }: CardMentorProps) {
  return (
    <Card gap={"1rem"} alignItems={"flex-start"} padding={"1rem"}>
      {mentor.profile &&
        <CardImage
          src={mentor.profile}
          width={150}
          height={150}
          alt={mentor.fullName}
        />
      }
      <section>
        <CardTitle>{mentor.fullName}</CardTitle>
        <CardSubtitle>{mentor.aboutMe}</CardSubtitle>
      </section>
      <CardStacks>
        {mentor.specialties.map((specialty: string) => (
          <CardStack key={specialty}>{specialty}</CardStack>
        ))}
      </CardStacks>
      <CalendlyButton url="https://calendly.com/sou-junior-tech" text="Agendar Mentoria" rootElement={document.getElementById("__next")!}/>
    </Card>
  );
}
