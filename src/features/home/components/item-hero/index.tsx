import Image, { StaticImageData } from 'next/image';

interface ItemHeroProps<
  T extends 'invisible' | 'primary' | 'secondary' | 'image',
> {
  type: T;
  imageSrc?: string | StaticImageData;
}

const baseClasses =
  'w-22 h-22 rounded-[24px] max-[438px]:w-12 max-[438px]:h-12 max-[438px]:rounded-[12px]';

export function ItemHero<
  T extends 'invisible' | 'primary' | 'secondary' | 'image',
>({ type, imageSrc }: ItemHeroProps<T>) {
  if (type === 'invisible') {
    return <div className={`${baseClasses} hidden`} />;
  }
  if (type === 'primary') {
    return (
      <div
        className={`${baseClasses} bg-[#003986] border-4 border-[#003986]`}
      />
    );
  }
  if (type === 'secondary') {
    return (
      <div
        className={`${baseClasses} border-4 border-[#003986] bg-transparent`}
      />
    );
  }
  if (type === 'image') {
    if (!imageSrc) return null;
    return (
      <div className={`${baseClasses} overflow-hidden`}>
        <Image
          width={100}
          height={100}
          src={imageSrc}
          alt="Imagem de um Mentor"
          loading="eager"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return null;
}
