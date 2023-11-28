import { Card } from "@/components/atoms/Card";
import { MentorType } from "@/mockups/mentores";
import Image from "next/image";
import { GreatContainer, HeaderCardDepo } from "./style";
import { ITestimony } from "@/services/interfaces/IUseTestimonyService";

interface CardDepoProps {
  testimony: ITestimony;
}

export function CardDepo({ testimony }: CardDepoProps) {
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
              src=""
              alt={testimony.userName}
              width={56}
              height={56}
            />
            <div>
              <h4>{testimony.userName}</h4>
              <h5>{testimony.role}</h5>
            </div>
          </HeaderCardDepo>
          <p>{testimony.description}</p>
        </GreatContainer>
      </Card>
    </div>
  );
}
