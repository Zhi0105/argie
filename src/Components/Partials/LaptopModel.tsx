import Lottie from 'lottie-react'
import laptop from '@_assets/laptop.json'

export const LatopModel = () => {
  return (
    <div className='textsphere flex flex-col justify-center items-center overflow-hidden'>
        <Lottie animationData={laptop} className='xs:w-[100vw] sm:w-[55vw] w-[55vw]' />
    </div>
  )
}
