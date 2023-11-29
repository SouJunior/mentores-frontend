import { UserProfileButtom } from "./styled";
import Image from "next/image";
import userAvatar from '@/assets/icons/userAvatar.png'

interface PhotoButtomProps {
  onClick?: () => void;
  selectedPhoto?: string | null;
  size?:number;
}

export default function PhotoButtom({
  onClick,
  selectedPhoto,
  size = 80
}: PhotoButtomProps) {
  return (
    <>
      <UserProfileButtom onClick={onClick}>
        {selectedPhoto ? (
          <Image width={size} height={size}  src={selectedPhoto} alt="Selected" />
        ) : (
         <Image src={userAvatar} alt="Avatar usuário."/>
        )}
      </UserProfileButtom>
    </>
  );
}
