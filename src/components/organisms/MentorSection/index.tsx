import { Slider } from "@/components/atoms/Slider";
import {
  MentorsComponent,
  MentorsContent,
  MentorsTitle,
  SeeAll,
} from "./style";
import Link from "next/link";

export const MentorSection = () => {
  return (
    <MentorsComponent id="mentor">
      <MentorsContent>
        <SeeAll>Ver todos</SeeAll>
        <MentorsTitle>Encontre seu mentor</MentorsTitle>
        <Slider />
      </MentorsContent>
    </MentorsComponent>
  );
};
