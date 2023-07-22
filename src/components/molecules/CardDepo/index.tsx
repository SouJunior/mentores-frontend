import { Card } from "@/components/atoms/Card";
import { MentorType } from "@/mockups/mentores";
import Image from "next/image";
import { GreatContainer, HeaderCardDepo } from "./style";

interface CardDepoProps {
  mentor: MentorType;
}

export function CardDepo({ mentor }: CardDepoProps) {
  return (
    <div style={{ marginLeft: "20px", paddingBottom: "5px" }}>
      <Card
        backgroundColor={"#fdfdfd"}
        height={310}
        width={330}
        justifyContent={"flex-start"}
      >
        <GreatContainer>
          <HeaderCardDepo>
            <Image
              src={mentor.image}
              alt={mentor.name}
              width={56}
              height={56}
            />
            <div>
              <h4>{mentor.name}</h4>
              <h5>{mentor.role}</h5>
            </div>
          </HeaderCardDepo>
          <p>{mentor.description}</p>
        </GreatContainer>
      </Card>
    </div>
  );
}
