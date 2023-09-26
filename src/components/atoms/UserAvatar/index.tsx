import { IUserContextType } from "@/context/interfaces/IUser";
import UserDefault from '@/assets/userDefault.png'
import Image from "next/image";

export function UserAvatar(){

    return (
        <Image alt="User Avatar" src={UserDefault}/>
    )
}