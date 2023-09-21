import { FC } from 'react'
import { AnimatedHover } from './Animations/AnimatedHover'

interface IteratedTextInterface {
  text: string,
  styles: string
}

export const IteratedText: FC<IteratedTextInterface> = ({ text, styles }) => {
  const words = text.split("")
  return (
    <div className={styles}>
      {
       words.map((letter: string, index: number) => {
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
