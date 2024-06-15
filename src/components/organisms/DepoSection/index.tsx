import { Button } from '@/components/atoms/Button';
import { CardDepo } from '@/components/molecules/CardDepo';
import Link from 'next/link';
import { ContainerDepo, ContainerSlider } from './style';
import { useTestimonyService } from '../../../services/user/useTestimonyService';
import { AxiosError } from 'axios';

import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export function DepoSection() {
  const { data: testimonies, error } = useTestimonyService();

  return (
    <ContainerDepo>
      <h2>Seja um mentor</h2>

      <ContainerSlider>
        <Swiper modules={[A11y]} slidesPerView="auto">
          {testimonies?.length &&
            testimonies?.map(testimony => {
              return (
                <SwiperSlide key={testimony.id}>
                  <CardDepo testimony={testimony} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </ContainerSlider>

      {error instanceof AxiosError && <b>{error?.response?.data.message}</b>}

      <Button as={Link} href="/cadastro">
        Quero mentorar
      </Button>
    </ContainerDepo>
  );
}
