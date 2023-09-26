import { UserCircle } from "lucide-react";
import { UserProfileButtom } from "./styled";
import Image from "next/image";

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
          <img width={size} height={size}  src={selectedPhoto} alt="Selected" />
        ) : (
          <UserCircle className="icon" />
        )}
      </UserProfileButtom>
    </>
  );
}
