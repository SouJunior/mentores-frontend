import UserDefault from "@/assets/userDefault.png";
import DropDownUserMenu from "@/components/molecules/DropdownUserMenu";
import Image from "next/image";
import {  UserAvatarContainer } from "./styled";
import useUser from "@/context/Auth/useUser";

export function UserAvatar() {
  const { user } = useUser();

  return (
    <>
      <UserAvatarContainer>
        {user ? (
          user.profile ? (
              <Image
                width={44}
                height={44}
                style={{borderRadius:'50%'}}
                alt="User Avatar"
                src={user.profile}
              />
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
