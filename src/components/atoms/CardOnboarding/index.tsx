import Image from 'next/image'
import { ContainerCard } from './style'

interface CardOnboardingProps {
  title: string
  description: string
  img: string
}

export function CardOnboarding({
  title,
  description,
  img,
}: CardOnboardingProps) {
  return (
    <ContainerCard>
      <Image width={180} height={180} src={img} alt={title} loading="eager" />
      <h3>{title}</h3>
      <p>{description}</p>
    </ContainerCard>
  )
}
