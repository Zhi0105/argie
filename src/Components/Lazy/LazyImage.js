import React from 'react'
import Dev from '../../assets/dev.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component' 

export const DevImage = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={Dev}
        alt="Dev image"
        height={height}
        width={width}
      />
    </div>
  )
}