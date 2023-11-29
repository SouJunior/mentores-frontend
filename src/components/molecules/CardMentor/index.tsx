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
import { PopupButton } from "react-calendly";

interface CardMentorProps {
  mentor: IMentors;
}

export function CardMentor({ mentor }: CardMentorProps) {
  const popUpButtonStyles = {
    display: "flex",
    FlexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 16px",
    gap: "8px",
    borderColor: '#046ad0',
    width: "calc(100% - 40px)",
    height: "48px",
  
    background: "#046ad0",
    borderRadius: "8px",
  
    fontFamily: "Radio Canada",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "150%",
  
    color: "#fdfdfd",
  
    marginTop: "10px"
  }

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
      <PopupButton styles={popUpButtonStyles} url="https://calendly.com/sou-junior-tech" text="Agendar Mentoria" rootElement={document.getElementById("__next")!}/>
    </Card>
  );
}
