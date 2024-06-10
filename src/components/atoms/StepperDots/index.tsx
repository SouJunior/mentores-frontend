import React from 'react'
import {
  ContainerStepper,
  CircleStepper,
  MovementIndicators,
  MovementAnimator,
} from './style'

export type MovementAnimatorProps = {
  index: number
  i: number
}

type StepperDotsProps = {
  currentStep: number
}

export default function StepperDots({ currentStep }: StepperDotsProps) {
  const items = [0, 1, 2]

  return (
    <>
      <ContainerStepper>
        {items.map((i) => {
          return (
            <CircleStepper key={i}>
              <MovementAnimator index={currentStep - 1} i={i}>
                <MovementIndicators />
              </MovementAnimator>
            </CircleStepper>
          )
        })}
      </ContainerStepper>
    </>
  )
}
