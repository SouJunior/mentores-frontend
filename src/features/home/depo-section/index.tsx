import { Button } from '@/components/button';
import { CardDepo } from '@/features/home/card-depo';
import { AxiosError } from 'axios';
import Link from 'next/link';
import { useTestimonyService } from '../../../services/user/useTestimonyService';

import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export function DepoSection() {
  const { data: testimonies, error } = useTestimonyService();

  return (
    <div className="flex flex-col gap-8 p-16 px-8 max-w-[1280px] mx-auto w-full max-[1440px]:max-w-none max-[1440px]:px-0 max-[438px]:py-14">
      <h2 className="text-[2.5rem] font-semibold leading-[120%] text-[#323232] max-[1440px]:px-8 max-[1133px]:px-4 max-[768px]:text-[2rem]">
        Seja um mentor
      </h2>

      <div className="depo-slider-container">
        <Swiper modules={[A11y]} slidesPerView="auto">
          {testimonies &&
            testimonies?.length > 0 &&
            testimonies?.map(testimony => {
              return (
                <SwiperSlide key={testimony.id}>
                  <CardDepo testimony={testimony} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>

      {error instanceof AxiosError && <b>{error?.response?.data.message}</b>}

      <Button as={Link} href="/cadastro" className="w-max mx-auto">
        Quero mentorar
      </Button>
    </div>
  );
}
