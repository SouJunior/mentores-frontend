import { ChevronLeft as ArrowBackIosOutlinedIcon } from 'lucide-react';
import Image from 'next/image';

interface UserAvatarProps {
  profile?: string | null;
}

export function UserAvatar({ profile }: UserAvatarProps) {
  return (
    <>
      <div className="w-11 h-11 rounded-full overflow-hidden [&_img]:w-full [&_img]:h-full [&_img]:object-cover">
        <Image
          width={44}
          height={44}
          alt="User Avatar"
          src={profile ?? '/userDefault.png'}
        />
      </div>

      <ArrowBackIosOutlinedIcon />
    </>
  );
}
