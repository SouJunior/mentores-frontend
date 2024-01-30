import UserDefault from '@/assets/userDefault.png'
import Image from 'next/image'
import useUser from '@/context/Auth/useUser'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import { useState } from 'react'

export function UserAvatar() {
  const { user } = useUser()
  const [imageError, setImageError] = useState(false)

  return (
    <>
      {user ? (
        user.profile ? (
          <div>
            {imageError ? (
              <Image alt="User Avatar" src={UserDefault} />
            ) : (
              <Image
                width={44}
                height={44}
                alt="User Avatar"
                style={{ border: '2px solid #666' }}
                src={user?.profile}
                onError={() => setImageError(true)}
              />
            )}
          </div>
        ) : (
          <Image alt="User Avatar" src={UserDefault} />
        )
      ) : (
        <Image alt="User Avatar" src={UserDefault} />
      )}

      <ArrowBackIosOutlinedIcon />
    </>
  )
}
