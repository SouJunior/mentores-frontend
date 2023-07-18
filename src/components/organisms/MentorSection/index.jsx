import SliderComponent from "@/components/atoms/SliderComponent";
import {
  MentorsComponent,
  MentorsContent,
  MentorsTitle,
  SeeAll,
} from "./style";

const MentorSection = () => {
  return (
    <MentorsComponent id="mentor">
      <MentorsContent>
        <SeeAll>Ver todos</SeeAll>
        <MentorsTitle>Encontre seu mentor</MentorsTitle>
        <SliderComponent />
      </MentorsContent>
    </MentorsComponent>
  );
};

export default MentorSection;