import { UserCircle } from "lucide-react";
import { UserProfileButtom } from "./styled";
import Image from "next/image";

interface PhotoButtomProps {
  onClick?: () => void;
  selectedPhoto?: string;
}

export default function PhotoButtom({ onClick, selectedPhoto }: PhotoButtomProps) {
  return (
    <>
      <UserProfileButtom onClick={onClick}>
        {selectedPhoto ? (
          <Image src={selectedPhoto} alt="UserImage"/>
        ): (        <UserCircle className="icon" />
)}

      </UserProfileButtom>
    </>
  );
}
