"use client"
import {
  CardContainer,
  StacksContainer,
  StyledName,
  TitleContainer,
  Stack,
  SchedButton,
  ButtonsContainer,
  InfoButton,
} from "./styled";
import Image from "next/image";
import ModalSchedMentor from "../ModalSchedMentor";
import { useEffect, useRef, useState } from "react";
import { IMentors } from "@/services/interfaces/IUseMentorsService";
import { PopupButton } from "react-calendly"

interface MentorsProps {
  mentor: IMentors;
}

export default function CardScheduling({ mentor }: MentorsProps) {
  const [open, setOpen] = useState(false)

  function handleModal(){
    setOpen(!open)
  }
  return (
    <CardContainer>
      <ModalSchedMentor onClose={handleModal} mentor={mentor} open={open}/>
      <TitleContainer>
        { mentor.profile &&
        <Image
          width={80}
          height={80}
          src={mentor.profile}
          alt={mentor.fullName}
          style={{ borderRadius: "80px", objectFit: "cover" }}
        />
        }
        <StyledName>{mentor.fullName}</StyledName>
      </TitleContainer>
      <StacksContainer>
        <>
          {mentor.specialties.map((specialty) => {
            return <Stack key={specialty}>{specialty}</Stack>;
          })}
        </>
      </StacksContainer>
      <ButtonsContainer>
        <a href={`https://calendly.com/${mentor.calendlyName}/${mentor.agendaName}?embed_domain=mentora.webflow.io&embed_type=Inline`}>
          <SchedButton>
            Agendar Mentoria
         </SchedButton>
        </a>
        <InfoButton  onClick={handleModal}>Saiba mais</InfoButton>
      </ButtonsContainer>
    </CardContainer>
  );
}
