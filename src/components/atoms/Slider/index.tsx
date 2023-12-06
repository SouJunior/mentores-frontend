import { CardMentor } from '@/components/molecules/CardMentor'
import { MutableRefObject, useEffect } from 'react'
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
  const { mentors, fetchMentors } = useMentorsService()

  useEffect(() => {
    const handleLoadFetchMentors = async () => {
      await fetchMentors()
    }
    handleLoadFetchMentors()
  }, [])

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
          )
        })}
      </Swiper>
    </SwiperContainer>
  )
}
