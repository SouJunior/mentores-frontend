import UserDefault from "@/assets/userDefault.png";
import DropDownUserMenu from "@/components/molecules/DropdownUserMenu";
import Image from "next/image";
import { UserAvatarContainer } from "./styled";
import useUser from "@/context/Auth/useUser";
import { useState } from "react";

export function UserAvatar() {
  const { user } = useUser();
  const [imageError, setImageError] = useState(false); 

  return (
    <>
      <UserAvatarContainer>
        {user ? (
          user.profile ? (
            <div>
              {imageError ? (
                <Image alt="User Avatar" src={UserDefault} />
              ) : (
                <Image
                  width={44}
                  height={44}
                  style={{ borderRadius: '50%' }}
                  alt="User Avatar"
                  src={user.profile}
                  onError={() => setImageError(true)} // Trate erros de carregamento de imagem
                />
              )}
            </div>
          ) : (
            <Image alt="User Avatar" src={UserDefault} />
          )
        ) : (
          <Image alt="User Avatar" src={UserDefault} />
        )}
        <DropDownUserMenu />
      </UserAvatarContainer>
    </>
  );
}
