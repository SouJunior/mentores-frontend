import card4Img from '@/assets/homepage/onboarding/conecte.svg'
import card3Img from '@/assets/homepage/onboarding/descreva.svg'
import card2Img from '@/assets/homepage/onboarding/encontre.svg'
import card1Img from '@/assets/homepage/onboarding/marque.svg'
import { CardOnboarding } from '@/components/atoms/CardOnboarding'
import { ContainerListCard } from './style'

export function ListCardsOnboarding() {
  const dataCards = [
    {
      id: 1,
      cardContent: {
        title: '1. Pesquise',
        description:
          'Encontre seu mentor especializado na área desejada e mais adequado para você.',
        img: card2Img,
      },
    },
    {
      id: 2,
      cardContent: {
        title: '2. Agende',
        description:
          'Marque um horário disponível na agenda do mentor,  que melhor  se encaixa para vocês.',
        img: card1Img,
      },
    },
    {
      id: 3,
      cardContent: {
        title: '3. Explique',
        description:
          'Descreva o seu objetivo com a mentoria, para que o mentor possa se preparar.',
        img: card3Img,
      },
    },
    {
      id: 4,
      cardContent: {
        title: '4. Conecte-se',
        description: 'Compareça no dia e horário agendado e comece a aprender.',
        img: card4Img,
      },
    },
  ]

  return (
    <ContainerListCard>
      {dataCards.map((data) => {
        return (
          <CardOnboarding
            key={data.id}
            title={data.cardContent.title}
            description={data.cardContent.description}
            img={data.cardContent.img}
          />
        )
      })}
    </ContainerListCard>
  )
}
