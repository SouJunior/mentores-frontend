import { UserCircle } from "lucide-react";
import { UserProfileButtom } from "./styled";

interface PhotoButtomProps {
  onClick?: () => void;
}

export default function PhotoButtom({ onClick }: PhotoButtomProps) {
  return (
    <>
      <UserProfileButtom onClick={onClick}>
        <UserCircle className="icon" />
      </UserProfileButtom>
    </>
  );
}
