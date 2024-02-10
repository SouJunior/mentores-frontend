import UserDefault from '@/assets/userDefault.png'
import Image from 'next/image'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import { useState } from 'react'
import { useAuthContext } from '@/context/Auth/AuthContext'

export function UserAvatar() {
  const { userSession, mentor } = useAuthContext()
  const [imageError, setImageError] = useState(false)

  return (
    <>
      {userSession ? (
        userSession.token ? (
          <div>
            {imageError ? (
              <Image alt="User Avatar" src={UserDefault} />
            ) : (
              <Image
                width={44}
                height={44}
                alt="User Avatar"
                style={{ border: '2px solid #666' }}
                src={mentor.data?.profile ?? ''}
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
