import Image, { StaticImageData } from 'next/image'
import { ItemImage, ItemInvisible, ItemPrimary, ItemSecondary } from './style'

interface ItemHeroProps<
  T extends 'invisible' | 'primary' | 'secondary' | 'image',
> {
  type: T
  imageSrc?: T extends 'image' ? StaticImageData : never
}

export function ItemHero<
  T extends 'invisible' | 'primary' | 'secondary' | 'image',
>({ type, imageSrc }: ItemHeroProps<T>) {
  if (type === 'invisible') {
    return <ItemInvisible />
  }
  if (type === 'primary') {
    return <ItemPrimary />
  }
  if (type === 'secondary') {
    return <ItemSecondary />
  }
  if (type === 'image') {
    if (!imageSrc) {
      return null
    }
    return (
      <ItemImage>
        <Image
          width={100}
          height={100}
          src={imageSrc}
          alt="Imagem de um Mentor"
          loading="eager"
          quality={100}
        />
      </ItemImage>
    )
  }

  return null
}
