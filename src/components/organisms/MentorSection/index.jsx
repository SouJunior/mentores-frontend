import React from "react";
import {
  MentorsComponent,
  MentorsContent,
  SeeAll,
  MentorsTitle,
} from "./style";
import SliderComponent from "@/components/atoms/SliderComponent";

const MentorSection = () => {
  return (
    <MentorsComponent id="mentor">
      <MentorsContent>
        <SeeAll>Ver todos</SeeAll>
        <MentorsTitle>Encontre seu mentor</MentorsTitle>
        <SliderComponent></SliderComponent>
      </MentorsContent>
    </MentorsComponent>
  );
};

export default MentorSection;
