import { CardMentor } from '@/components/molecules/CardMentor';
import { MutableRefObject } from 'react';
import { A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { SwiperContainer } from './style';

import { useMentorsCalendlyInfoService } from '@/services/user/useMentorsCalendlyInfoService';
import { useMentorsService } from '@/services/user/useMentorsService';
import 'swiper/css';
import 'swiper/css/pagination';

interface SliderProps {
  swiperRef: MutableRefObject<{
    swiper: SwiperClass;
  } | null>;
}

export const Slider = ({ swiperRef }: SliderProps) => {
  const { data: mentors = [] } = useMentorsService();
  const { data: mentorsCalendlyInfo } = useMentorsCalendlyInfoService()

  const mentorsCalendlyInfoArray = Array.isArray(mentorsCalendlyInfo) ? mentorsCalendlyInfo : [];

  return (
    <SwiperContainer>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={0}
        slidesPerView="auto"
        breakpoints={{
          1133: {
            spaceBetween: 32,
          },
        }}
        ref={swiperRef}
      >
  { mentors.map((mentor) => {
      const mentorCalendlyInfo = mentorsCalendlyInfoArray.find(info => info.mentorId === mentor.id);

          return (
            <SwiperSlide key={mentor.id}>
              <CardMentor
                mentorCalendlyInfo={mentorCalendlyInfo} 
                mentor={mentor}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperContainer>
  );
};