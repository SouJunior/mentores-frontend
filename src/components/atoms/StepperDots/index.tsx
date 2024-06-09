import React, { useState } from 'react'
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

export default function StepperDots() {
  const [index, setIndex] = useState(0)
  const items = [0, 1, 2, 3]
  return (
    <>
      <ContainerStepper>
        {items.map((i) => {
          return (
            <CircleStepper key={i}>
              <MovementAnimator index={index} i={i}>
                <MovementIndicators />
              </MovementAnimator>
            </CircleStepper>
          )
        })}
      </ContainerStepper>
    </>
  )
}
