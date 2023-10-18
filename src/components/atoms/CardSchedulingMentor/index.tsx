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
import UserDefault from "@/assets/userDefault.png";
import { MentorCardProp } from "@/utils/globals";

interface MentorsProps {
  mentor: MentorCardProp;
}

export default function CardScheduling({ mentor }: MentorsProps) {
  return (
    <CardContainer>
      <TitleContainer>
        <Image
          width={80}
          height={80}
          src={mentor.profile || UserDefault}
          alt={mentor.fullName}
          style={{ borderRadius: "80px", objectFit: "cover" }}
        />
        <StyledName>{mentor.fullName}</StyledName>
      </TitleContainer>
      <StacksContainer>
        <>
          {mentor.specialties.map((stack) => {
            return <Stack key={stack}>{stack}</Stack>;
          })}
        </>
      </StacksContainer>
      <ButtonsContainer>
        <SchedButton>Agendar Mentoria</SchedButton>
        <InfoButton>Saiba mais</InfoButton>
      </ButtonsContainer>
    </CardContainer>
  );
}
