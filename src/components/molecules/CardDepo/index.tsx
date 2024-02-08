import Image from 'next/image'
import {
  Card,
  HeaderCardDepo,
  TestimonyDescription,
  TestimonyImageContainer,
  TestimonyInfo,
} from './style'
import { ITestimony } from '@/services/interfaces/IUseTestimonyService'

interface CardDepoProps {
  testimony: ITestimony
}

export function CardDepo({ testimony }: CardDepoProps) {
  return (
    <Card>
      <HeaderCardDepo>
        <TestimonyImageContainer>
          {testimony.imageUrl && (
            <Image
              src={testimony.imageUrl}
              alt={testimony.userName}
              width={64}
              height={64}
              quality={100}
            />
          )}
        </TestimonyImageContainer>

        <TestimonyInfo>
          <span className="testimony-name">{testimony.userName}</span>
          <span className="testimony-role" title={testimony.role}>
            {testimony.role}
          </span>
        </TestimonyInfo>
      </HeaderCardDepo>

      <TestimonyDescription title={testimony.description}>
        {testimony.description}
      </TestimonyDescription>
    </Card>
  )
}
