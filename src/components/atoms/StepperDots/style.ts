import styled from 'styled-components'
import { MovementAnimatorProps } from '.'

export const ContainerStepper = styled.div`
  display: flex;
  flex-direction: row;
`

export const CircleStepper = styled.ul`
  width: 40px;
  height: 40px;
  background-color: #ddd;
  position: relative;
  border-radius: 20px;
  margin-right: 4px;
  overflow: hidden;
`

export const MovementIndicators = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: tomato;
  transition: transform 0.5s ease;
`

export const MovementAnimator = styled.div<MovementAnimatorProps>`
  transform: translateX(${(props) => (props.index - props.i) * 40}px);
`
