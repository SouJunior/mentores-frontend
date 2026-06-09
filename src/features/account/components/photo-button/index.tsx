import Image from 'next/image';
import { User } from 'phosphor-react';

interface PhotoButtonProps {
  selectedPhoto?: string | null;
  size?: number;
}

export default function PhotoButton({
  selectedPhoto,
  size = 80,
}: PhotoButtonProps) {
  return (
    <section
      className="flex justify-center items-center border-2 border-gray-700 bg-white rounded-full text-gray-700 overflow-hidden [&_.icon-without-img]:w-10 [&_.icon-without-img]:h-10 [&_img]:w-full [&_img]:h-full [&_img]:object-cover"
      style={{ width: size, height: size }}
    >
      {selectedPhoto ? (
        <Image width={size} height={size} src={selectedPhoto} alt="Selected" />
      ) : (
        <User weight="bold" className="icon-without-img" />
      )}
    </section>
  );
}
