import { CardMentor } from "@/components/molecules/CardMentor";
import { useEffect, useRef, useState } from "react";
import { A11y, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight, SwiperContainer } from "./style";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useMentorsService } from "@/services/user/useMentorsService";

export const Slider = () => {
  const { mentors, mentorsErrors, fetchMentors } = useMentorsService()

  const swiperRef = useRef<{ swiper: SwiperClass }>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleNext = () => {
    swiperRef.current?.swiper?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.swiper?.slidePrev();
  };

  useEffect(() => {
    const handleLoadFetchMentors = async () => {
      await fetchMentors()
    }
    handleLoadFetchMentors()
  }, [])

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      swiper.on("slideChange", () => {
        setIsEnd(swiper.isEnd);
        setIsBeginning(swiper.isBeginning);
      });
    }
  }, []);

  return (
    <SwiperContainer>
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={28}
        slidesPerView={4}
        ref={swiperRef}
      >
        {mentors.map((mentor) => {
          return (
            <SwiperSlide key={mentor.id}>
              <CardMentor mentor={mentor} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ArrowRight onClick={handleNext} isDisabled={isEnd}>
        {"❯"}
      </ArrowRight>
      <ArrowLeft onClick={handlePrev} isDisabled={isBeginning}>
        {"❮"}
      </ArrowLeft>
    </SwiperContainer>
  );
};
