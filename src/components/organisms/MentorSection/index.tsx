import { Slider } from '@/components/atoms/Slider'
import { MentorsComponent, MentorsContent, MentorsTitle, SeeAll } from './style'

export const MentorSection = () => {
  return (
    <MentorsComponent id="mentor">
      <MentorsContent>
        <SeeAll href="/mentores">Ver todos</SeeAll>
        <MentorsTitle>Encontre seu mentor</MentorsTitle>
        <Slider />
      </MentorsContent>
    </MentorsComponent>
  )
}
