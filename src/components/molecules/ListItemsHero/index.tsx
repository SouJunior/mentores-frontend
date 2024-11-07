import mentor1Img from '@/assets/homepage/heroSection/mentor1.webp';
import mentor2Img from '@/assets/homepage/heroSection/mentor2.webp';
import mentor3Img from '@/assets/homepage/heroSection/mentor3.webp';
import { ItemHero } from '@/components/atoms/ItemHero';
import { ContainerList } from './style';
import { ComponentProps } from 'react';

type ListItemsHeroProps = ComponentProps<'div'>;

export function ListItemsHero(props: ListItemsHeroProps) {
  return (
    <ContainerList {...props}>
      <div>
        <ItemHero type={'invisible'} />
        <ItemHero type={'image'} imageSrc={mentor1Img} />
        <ItemHero type={'secondary'} />
        <ItemHero type={'primary'} />
      </div>
      <div>
        <ItemHero type={'secondary'} />
        <ItemHero type={'primary'} />
        <ItemHero type={'image'} imageSrc={mentor2Img} />
        <ItemHero type={'primary'} />
      </div>
      <div>
        <ItemHero type={'primary'} />
        <ItemHero type={'image'} imageSrc={mentor3Img} />
        <ItemHero type={'secondary'} />
        <ItemHero type={'invisible'} />
      </div>
    </ContainerList>
  );
}
