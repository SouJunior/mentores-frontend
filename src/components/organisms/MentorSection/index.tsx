import { Slider } from '@/components/atoms/Slider'
import { ArrowSliderBtn, ContainerButtons, MentorsComponent, MentorsContent, MentorsContentContainer, MentorsTitle, SeeAll } from './style'
import { useEffect, useRef, useState } from 'react';
import { SwiperClass } from 'swiper/react';

export const MentorSection = () => {
  const swiperRef = useRef<{ swiper: SwiperClass } | null>(null);
  const [disabledArrows, setDisabledArrows] = useState({
    left: true,
    right: false
  })

  const handleNext = () => {
    swiperRef.current?.swiper?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.swiper?.slidePrev();
  };

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      swiper.on("slideChange", () => {
        setDisabledArrows({
          left: swiper.isBeginning,
          right: swiper.isEnd
        });
      });
    }
  }, []);

  return (
    <MentorsComponent id="mentor">
      <MentorsContentContainer>
        <MentorsContent>
          <MentorsTitle>Encontre seu mentor:</MentorsTitle>

          <ContainerButtons>
            <SeeAll href="/mentores">Ver todos</SeeAll>

            <ArrowSliderBtn onClick={handlePrev} disabled={disabledArrows.left}>
              <ArrowLeftIcon />
            </ArrowSliderBtn>

            <ArrowSliderBtn onClick={handleNext} disabled={disabledArrows.right}>
              <ArrowRightIcon />
            </ArrowSliderBtn>
          </ContainerButtons>
        </MentorsContent>

        <Slider swiperRef={swiperRef} />
      </MentorsContentContainer>
    </MentorsComponent>
  )
}

function ArrowLeftIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_6162_36458)">
        <mask id="path-1-inside-1_6162_36458" fill="white">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4445 6.66667L10.6667 16.4444L20.4445 26.2222"/>
        </mask>
        <path d="M21.1516 7.37378C21.5421 6.98325 21.5421 6.35009 21.1516 5.95956C20.761 5.56904 20.1279 5.56904 19.7374 5.95956L21.1516 7.37378ZM10.6667 16.4444L9.95957 15.7373C9.56905 16.1279 9.56905 16.761 9.95957 17.1516L10.6667 16.4444ZM19.7374 26.9293C20.1279 27.3199 20.761 27.3199 21.1516 26.9293C21.5421 26.5388 21.5421 25.9056 21.1516 25.5151L19.7374 26.9293ZM19.7374 5.95956L9.95957 15.7373L11.3738 17.1516L21.1516 7.37378L19.7374 5.95956ZM9.95957 17.1516L19.7374 26.9293L21.1516 25.5151L11.3738 15.7373L9.95957 17.1516Z" fill="#046AD0" mask="url(#path-1-inside-1_6162_36458)"/>
      </g>
      <defs>
        <clipPath id="clip0_6162_36458">
          <rect width="32" height="32" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <g clip-path="url(#clip0_6162_36460)">
        <mask id="path-1-inside-1_6162_36460" fill="white">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5555 25.3333L21.3333 15.5556L11.5555 5.77777"/>
        </mask>
        <path d="M10.8484 24.6262C10.4579 25.0167 10.4579 25.6499 10.8484 26.0404C11.239 26.431 11.8721 26.431 12.2626 26.0404L10.8484 24.6262ZM21.3333 15.5556L22.0404 16.2627C22.4309 15.8721 22.4309 15.239 22.0404 14.8484L21.3333 15.5556ZM12.2626 5.07066C11.8721 4.68014 11.239 4.68014 10.8484 5.07066C10.4579 5.46119 10.4579 6.09435 10.8484 6.48488L12.2626 5.07066ZM12.2626 26.0404L22.0404 16.2627L20.6262 14.8484L10.8484 24.6262L12.2626 26.0404ZM22.0404 14.8484L12.2626 5.07066L10.8484 6.48488L20.6262 16.2627L22.0404 14.8484Z" fill="#046AD0" mask="url(#path-1-inside-1_6162_36460)"/>
      </g>
      <defs>
        <clipPath id="clip0_6162_36460">
          <rect width="32" height="32" fill="white" transform="translate(32 32) rotate(-180)"/>
        </clipPath>
      </defs>
    </svg>
  )
}