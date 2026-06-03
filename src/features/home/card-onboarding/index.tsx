import Image from 'next/image';
import { ReactNode } from 'react';

interface CardOnboardingProps {
  title: string;
  children: ReactNode;
  img: string;
}

export function CardOnboarding({
  title,
  children: description,
  img,
}: CardOnboardingProps) {
  return (
    <div className="flex flex-col items-center gap-4 bg-white rounded-lg p-6 px-4 text-center">
      <Image
        width={180}
        height={180}
        src={img}
        alt={title}
        loading="eager"
        className="w-40 h-40 max-[438px]:w-[7.875rem] max-[438px]:h-[7.875rem]"
      />

      <section className="flex flex-col gap-[0.6rem]">
        <h5 className="text-[#002C66] text-[1.25rem] leading-6 font-medium">
          {title}
        </h5>
        <p className="text-[#323232] text-[1rem] font-normal leading-[1.4rem] max-w-[15.75rem] max-[438px]:max-w-[13.875rem]">
          {description}
        </p>
      </section>
    </div>
  );
}
