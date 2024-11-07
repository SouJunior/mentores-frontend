import styled from 'styled-components'
import { MovementAnimatorProps } from '.'

export const ContainerStepper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0.55rem;
`

export const CircleStepper = styled.ul`
  width: 11px;
  height: 11px;
  background-color: #ddd;
  position: relative;
  border-radius: 20px;
  margin-right: 9px;
  margin-left: 9px;
  overflow: hidden;
`

export const MovementIndicators = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 11px;
  height: 11px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.blue[800]};
  transition: transform 0.5s ease;
`

export const MovementAnimator = styled.div<MovementAnimatorProps>`
  transform: translateX(${(props) => (props.index - props.i) * 40}px);
`
