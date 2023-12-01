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
import { useEffect, useState } from "react";
import { grey } from "@mui/material/colors";

interface CardMentorProps {
  mentor: IMentors;
}

export function CardMentor({ mentor }: CardMentorProps) {
  const [ buttonDisabled, setButtonDisabled ] = useState<boolean>(false)

  useEffect(() => {
    if (!mentor.calendlyName || !mentor.agendaName) {
      setButtonDisabled(true)
    } else {
      setButtonDisabled(false)
    }
  }, [])

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
      <a href={`https://calendly.com/${mentor.calendlyName}/${mentor.agendaName}?embed_domain=mentora.webflow.io&embed_type=Inline`}>
      <CardButton disabled={buttonDisabled}> Agendar um horário </CardButton>
      </a>
    </Card>
  );
}
