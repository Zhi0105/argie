import React, { FC } from 'react'

interface mapCardsInterface {
  image: React.JSX.Element,
  text?: string
}

export const MapCards: FC<mapCardsInterface> = ({ image, text }) => {
  return (
    <div className="card_item max-w-sm rounded overflow-hidden shadow-2xl">
        <div className="h-full px-6 py-2 flex flex-col items-center justify-center">
          {image}
          {text &&
            <div className="font-bold text-sm mt-1 text-[#08FFD4]">{text}</div>
          }
      </div>
    </div>
  )
}
