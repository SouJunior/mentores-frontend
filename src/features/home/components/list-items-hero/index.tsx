import { ItemHero } from '@/features/home/components/item-hero';
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
        <ItemHero
          type={'image'}
          imageSrc={'/homepage/heroSection/mentor1.webp'}
        />
        <ItemHero type={'secondary'} />
        <ItemHero type={'primary'} />
      </div>
      <div className="flex gap-5 max-[438px]:gap-[0.6rem]">
        <ItemHero type={'secondary'} />
        <ItemHero type={'primary'} />
        <ItemHero
          type={'image'}
          imageSrc={'/homepage/heroSection/mentor2.webp'}
        />
        <ItemHero type={'primary'} />
      </div>
      <div className="flex gap-5 max-[438px]:gap-[0.6rem]">
        <ItemHero type={'primary'} />
        <ItemHero
          type={'image'}
          imageSrc={'/homepage/heroSection/mentor3.webp'}
        />
        <ItemHero type={'secondary'} />
        <ItemHero type={'invisible'} />
      </div>
    </div>
  );
}
