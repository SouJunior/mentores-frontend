import Image from 'next/image'
import { ContainerCard } from './style'
import { ReactNode } from 'react'

interface CardOnboardingProps {
  title: string
  children: ReactNode
  img: string
}

export function CardOnboarding({
  title,
  children: description,
  img,
}: CardOnboardingProps) {
  return (
    <ContainerCard>
      <Image width={180} height={180} src={img} alt={title} loading="eager" />

      <section>
        <h5 className="title">{title}</h5>
        <p>{description}</p>
      </section>
    </ContainerCard>
  )
}
