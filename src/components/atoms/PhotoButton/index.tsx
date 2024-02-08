import { UserProfileButtom } from './styled'
import Image from 'next/image'
import { User } from 'phosphor-react'

interface PhotoButtonProps {
  onClick?: () => void
  selectedPhoto?: string | null
  size?: number
}

export default function PhotoButton({
  onClick,
  selectedPhoto,
  size = 80,
}: PhotoButtonProps) {
  return (
    <UserProfileButtom onClick={onClick}>
      {selectedPhoto ? (
        <Image width={size} height={size} src={selectedPhoto} alt="Selected" />
      ) : (
        <User weight="bold" className="icon-without-img" />
      )}
    </UserProfileButtom>
  )
}
