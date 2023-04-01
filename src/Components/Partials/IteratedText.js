import React from 'react'
import { AnimatedHover } from './Animation/AnimatedHover'

export const IteratedText = ({ text, styles }) => {
  const words = text.split("")
  return (
    <div className={styles}>
      {
       words.map((letter, index) => {
        return (
          <AnimatedHover key={index}>
            {letter === " " ? "\u00A0" : letter}
          </AnimatedHover>
        )
       }) 
      }
    </div>
  )
}
