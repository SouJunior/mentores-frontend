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
      <PopupButton styles={{
          width: "174.5px",
          height: "44px",
          padding: "16px 24px 16px 24px",
          borderRadius: '8px',
          gap: "8px",
          backgroundColor: "#003986",
          border: 'none',
          color: "white",
          fontSize: '15px',
          lineHeight: "19.2px",
          display: "flex",
          alignItems: "center",
         }} url="https://calendly.com/sou-junior-tech" text="Agendar Mentoria" rootElement={document.getElementById("__next")!}/>
        <InfoButton  onClick={handleModal}>Saiba mais</InfoButton>
      </ButtonsContainer>
    </CardContainer>
  );
}
