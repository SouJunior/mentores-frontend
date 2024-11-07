import { Slider } from '@/components/atoms/Slider';
import {
  ContainerButtons,
  MentorsComponent,
  MentorsContent,
  MentorsContentContainer,
  MentorsTitle,
} from './style';
import { useEffect, useRef, useState } from 'react';
import { SwiperClass } from 'swiper/react';
import { Button } from '@/components/atoms/Button';
import Link from 'next/link';

export const MentorSection = () => {
  const swiperRef = useRef<{ swiper: SwiperClass } | null>(null);
  const [disabledArrows, setDisabledArrows] = useState({
    left: true,
    right: false,
  });

  const handleNext = () => {
    swiperRef.current?.swiper?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.swiper?.slidePrev();
  };

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      swiper.on('slideChange', () => {
        setDisabledArrows({
          left: swiper.isBeginning,
          right: swiper.isEnd,
        });
      });
    }
  }, []);

  return (
    <MentorsComponent id="mentor">
      <MentorsContentContainer className="container">
        <MentorsTitle>Encontre seu mentor</MentorsTitle>

        <MentorsContent>
          <Slider swiperRef={swiperRef} />
          <ContainerButtons>
            <Button
              variant="secondary"
              onClick={handlePrev}
              disabled={disabledArrows.left}
              className="arrow-slider"
            >
              <ArrowLeftIcon />
            </Button>

            <Button as={Link} variant="secondary" href="/mentores">
              Ver todos
            </Button>

            <Button
              variant="secondary"
              onClick={handleNext}
              disabled={disabledArrows.right}
              className="arrow-slider"
            >
              <ArrowRightIcon />
            </Button>
          </ContainerButtons>
        </MentorsContent>
      </MentorsContentContainer>
    </MentorsComponent>
  );
};

function ArrowLeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.7959 18.7041C16.0073 18.9154 16.126 19.2021 16.126 19.5009C16.126 19.7998 16.0073 20.0865 15.7959 20.2978C15.5846 20.5092 15.2979 20.6279 14.999 20.6279C14.7002 20.6279 14.4135 20.5092 14.2022 20.2978L6.70216 12.7978C6.59728 12.6933 6.51407 12.5691 6.45729 12.4324C6.40051 12.2956 6.37128 12.149 6.37128 12.0009C6.37128 11.8529 6.40051 11.7063 6.45729 11.5695C6.51407 11.4328 6.59728 11.3086 6.70216 11.2041L14.2022 3.70407C14.4135 3.49272 14.7002 3.37399 14.999 3.37399C15.2979 3.37399 15.5846 3.49273 15.7959 3.70407C16.0073 3.91541 16.126 4.20206 16.126 4.50094C16.126 4.79983 16.0073 5.08647 15.7959 5.29782L9.09373 12L15.7959 18.7041Z"
        fill="#003986"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.2959 12.7959L9.7959 20.2959C9.58455 20.5073 9.29791 20.626 8.99902 20.626C8.70014 20.626 8.41349 20.5073 8.20215 20.2959C7.9908 20.0846 7.87207 19.798 7.87207 19.4991C7.87207 19.2002 7.9908 18.9135 8.20215 18.7022L14.9062 12L8.20402 5.29594C8.09937 5.1913 8.01636 5.06706 7.95973 4.93033C7.90309 4.79361 7.87394 4.64706 7.87394 4.49907C7.87394 4.35107 7.90309 4.20453 7.95973 4.0678C8.01636 3.93107 8.09937 3.80684 8.20402 3.70219C8.30867 3.59755 8.4329 3.51453 8.56963 3.4579C8.70636 3.40127 8.8529 3.37212 9.0009 3.37212C9.14889 3.37212 9.29543 3.40127 9.43216 3.4579C9.56889 3.51453 9.69313 3.59755 9.79777 3.70219L17.2978 11.2022C17.4025 11.3068 17.4856 11.4311 17.5422 11.5679C17.5988 11.7047 17.6279 11.8514 17.6277 11.9995C17.6275 12.1475 17.5981 12.2941 17.5412 12.4308C17.4843 12.5675 17.4009 12.6916 17.2959 12.7959Z"
        fill="#003986"
      />
    </svg>
  );
}
