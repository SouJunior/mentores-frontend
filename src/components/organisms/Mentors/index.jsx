import React from "react";
import {
  MentorsTitleDetach,
  MentorsComponent,
  MentorsContent,
  SeeAll,
  MentorsTitle,
} from "./style";
import Carousel from "better-react-carousel";
import SliderComponent from "@/components/atoms/SliderComponent";
import CardMentor from "@/components/molecules/CardMentor";

const Mentors = () => {
  return (
    <MentorsComponent>
      <MentorsContent>
        <SeeAll>Ver todos</SeeAll>
        <MentorsTitle>
          Tenha mentoria com <MentorsTitleDetach>UX Design</MentorsTitleDetach>
        </MentorsTitle>
        <SliderComponent cols={4} row={1} autoplay={2000} gap={"20px"}>
          <Carousel.Item>
            <CardMentor
              image={"vanessa.png"}
              name={"Vanêssa Santana"}
              role={"Head de Produto - Bayer"}
              stacks={["Agile Coach", "Product Manager"]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <CardMentor
              image={"wanderson.png"}
              name={"Wanderson Santos"}
              role={"Back-end Developer - Teddy Open Finance"}
              stacks={["Back-end"]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <CardMentor
              image={"vinicius.png"}
              name={"Vinicius L Miguel"}
              role={"Lead UX Design | Research | IA - FortBrasil"}
              stacks={["UX Design", "Product Design"]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <CardMentor
              image={"vinicius.png"}
              name={"Vinicius L Miguel"}
              role={"Lead UX Design | Research | IA - FortBrasil"}
              stacks={["UX Design", "Product Design"]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <CardMentor
              image={"wanderson.png"}
              name={"Wanderson Santos"}
              role={"Back-end Developer - Teddy Open Finance"}
              stacks={["Back-end"]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <CardMentor
              image={"vanessa.png"}
              name={"Vanêssa Santana"}
              role={"Head de Produto - Bayer"}
              stacks={["Agile Coach", "Product Manager"]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <CardMentor
              image={"vanessa.png"}
              name={"Vanêssa Santana"}
              role={"Head de Produto - Bayer"}
              stacks={["Agile Coach", "Product Manager"]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <CardMentor
              image={"wanderson.png"}
              name={"Wanderson Santos"}
              role={"Back-end Developer - Teddy Open Finance"}
              stacks={["Back-end"]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <CardMentor
              image={"vinicius.png"}
              name={"Vinicius L Miguel"}
              role={"Lead UX Design | Research | IA - FortBrasil"}
              stacks={["UX Design", "Product Design"]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <CardMentor
              image={"vinicius.png"}
              name={"Vinicius L Miguel"}
              role={"Lead UX Design | Research | IA - FortBrasil"}
              stacks={["UX Design", "Product Design"]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <CardMentor
              image={"wanderson.png"}
              name={"Wanderson Santos"}
              role={"Back-end Developer - Teddy Open Finance"}
              stacks={["Back-end"]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <CardMentor
              image={"vanessa.png"}
              name={"Vanêssa Santana"}
              role={"Head de Produto - Bayer"}
              stacks={["Agile Coach", "Product Manager"]}
            />
          </Carousel.Item>
        </SliderComponent>
      </MentorsContent>
    </MentorsComponent>
  );
};

export default Mentors;
