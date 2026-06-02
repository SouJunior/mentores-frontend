import { UserProfileContainer } from './styled';
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
    <UserProfileContainer>
      {selectedPhoto ? (
        <Image width={size} height={size} src={selectedPhoto} alt="Selected" />
      ) : (
        <User weight="bold" className="icon-without-img" />
      )}
    </UserProfileContainer>
  );
}
