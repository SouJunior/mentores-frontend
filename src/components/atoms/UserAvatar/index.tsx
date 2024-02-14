import UserDefault from '@/assets/userDefault.png'
import Image from 'next/image'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import { useAuthContext } from '@/context/Auth/AuthContext'
import { ImageContainer } from './styles'

export function UserAvatar() {
  const { mentor } = useAuthContext()

  return (
    <>
      <ImageContainer>
        <Image
          width={44}
          height={44}
          alt="User Avatar"
          src={mentor.data?.profile ?? UserDefault}
        />
      </ImageContainer>

      <ArrowBackIosOutlinedIcon />
    </>
  )
}
