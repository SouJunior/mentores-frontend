import { CardMentor } from '@/components/molecules/CardMentor'
import { MutableRefObject } from 'react'
import { A11y, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { SwiperContainer } from './style'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useMentorsService } from '@/services/user/useMentorsService'

interface SliderProps {
  swiperRef: MutableRefObject<{
    swiper: SwiperClass
  } | null>
}

export const Slider = ({ swiperRef }: SliderProps) => {
  const { data: mentors } = useMentorsService()

  const completedProfileMentors = mentors?.filter(
    (mentor) => mentor.registerComplete,
  )

  return (
    <SwiperContainer>
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={28}
        slidesPerView={4}
        ref={swiperRef}
      >
        {completedProfileMentors?.map((mentor) => {
          return (
            <SwiperSlide key={mentor.id}>
              <CardMentor mentor={mentor} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </SwiperContainer>
  )
}
