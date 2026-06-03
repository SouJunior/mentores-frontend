import UserDefault from '@/assets/userDefault.png';
import Image from 'next/image';
import { ChevronLeft as ArrowBackIosOutlinedIcon } from 'lucide-react';
import { useAuthContext } from '@/context/Auth/AuthContext';

export function UserAvatar() {
  const { mentor } = useAuthContext();

  return (
    <>
      <div className="w-11 h-11 rounded-full overflow-hidden [&_img]:w-full [&_img]:h-full [&_img]:object-cover">
        <Image
          width={44}
          height={44}
          alt="User Avatar"
          src={mentor.data?.profile ?? UserDefault}
        />
      </div>

      <ArrowBackIosOutlinedIcon />
    </>
  );
}
