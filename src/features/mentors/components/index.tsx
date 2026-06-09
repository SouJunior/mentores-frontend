import { CardMentor } from '@/features/mentors/components/card-mentor';
import { IMentors } from '@/shared/types/IUseMentorsService';
import { ICalendlyUserInfo } from '@/shared/types/IUseUserCalendlyInfoService';
import { MutableRefObject } from 'react';
import { A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

interface SliderProps {
  swiperRef: MutableRefObject<{
    swiper: SwiperClass;
  } | null>;
  mentors: IMentors[];
  calendlyInfo: ICalendlyUserInfo[];
}

export const Slider = ({ swiperRef, mentors, calendlyInfo }: SliderProps) => {
  const mentorsCalendlyInfoArray = Array.isArray(calendlyInfo)
    ? calendlyInfo
    : [];

  return (
    <div className="swiper-mentor-container relative">
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
        {mentors &&
          Array.isArray(mentors) &&
          mentors.map(mentor => {
            const mentorCalendlyInfo = mentorsCalendlyInfoArray.find(
              info => info.mentorId === mentor.id
            );

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
    </div>
  );
};
