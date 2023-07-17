import CardMentor from "@/components/molecules/CardMentor";
import { mentores } from "@/mockups/mentores";
import { A11y, Pagination, Scrollbar } from "swiper/modules";
import { Swiper } from "swiper/react";
import { ArrowLeft, ArrowRight, SwiperContainer, SwiperSlide } from "./style";

// Import Swiper styles
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SliderComponent = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    swiperRef.current?.swiper?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.swiper?.slidePrev();
  };

  return (
    <SwiperContainer>
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={4}
        ref={swiperRef}
      >
        {mentores.map((mentor) => {
          return (
            <SwiperSlide key={mentor.name}>
              <CardMentor mentor={mentor} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ArrowRight onClick={handleNext}>{"❯"}</ArrowRight>
      <ArrowLeft onClick={handlePrev}>{"❮"}</ArrowLeft>
    </SwiperContainer>
  );
};

export default SliderComponent;
