import mentor1Img from '@/assets/homepage/heroSection/mentor1.webp';
import mentor2Img from '@/assets/homepage/heroSection/mentor2.webp';
import mentor3Img from '@/assets/homepage/heroSection/mentor3.webp';
import { ItemHero } from '@/features/home/item-hero';
import { ComponentProps } from 'react';

type ListItemsHeroProps = ComponentProps<'div'>;

export function ListItemsHero({ className, ...props }: ListItemsHeroProps) {
  return (
    <div
      className={`flex flex-col gap-6 max-[438px]:gap-[0.6rem] ${className ?? ''}`}
      {...props}
    >
      <div className="flex gap-5 max-[438px]:gap-[0.6rem]">
        <ItemHero type={'invisible'} />
        <ItemHero type={'image'} imageSrc={mentor1Img} />
        <ItemHero type={'secondary'} />
        <ItemHero type={'primary'} />
      </div>
      <div className="flex gap-5 max-[438px]:gap-[0.6rem]">
        <ItemHero type={'secondary'} />
        <ItemHero type={'primary'} />
        <ItemHero type={'image'} imageSrc={mentor2Img} />
        <ItemHero type={'primary'} />
      </div>
      <div className="flex gap-5 max-[438px]:gap-[0.6rem]">
        <ItemHero type={'primary'} />
        <ItemHero type={'image'} imageSrc={mentor3Img} />
        <ItemHero type={'secondary'} />
        <ItemHero type={'invisible'} />
      </div>
    </div>
  );
}
