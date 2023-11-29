import { Card } from "@/components/atoms/Card";
import Image from "next/image";
import {
  CardButton,
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
    <Card height={443} justifyContent={"center"}>
      { mentor.profile &&
      <Image
        src={mentor.profile}
        width={150}
        height={150}
        style={{ borderRadius: "100%", objectFit: "cover" }}
        alt={mentor.fullName}
      />
      }
      <CardTitle>{mentor.fullName}</CardTitle>
      <CardSubtitle>{mentor.role}</CardSubtitle>
      <CardStacks>
        {mentor.specialties.map((specialty: string) => (
          <CardStack key={specialty}>{specialty}</CardStack>
        ))}
      </CardStacks>
      <CardButton>Agendar um horário</CardButton>
    </Card>
  );
}
