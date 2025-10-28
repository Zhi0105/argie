import { Greet } from '@_components/Partials/Greet'
import { ComputerCanvas } from '@_src/Components/Partials/Canvas/ComputerCanvas'
import { Overview } from './Home/Overview'
import { Experiences } from './Home/Experiences'
import { Tech } from './Home/Tech'
import { Contact } from './Contact'
import { Work } from './Home/Work'
import Lottie from 'lottie-react'
import tech from '@_assets/tech.json'
import { useMediaQuery } from '../Hooks/useMediaQuery'

export const Home = () => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)")
  const isMediumScreen = useMediaQuery("(max-width: 1024px)")

  return (
    <div className="index_main min-h-screen w-screen flex flex-col">
      <section 
        className={`index_container min-h-screen w-full grid
          ${isMediumScreen ? 'grid-cols-1 px-8' : 'grid-cols-2 px-16'}
          place-items-center transition-all duration-300`}>
        
        <Greet />

        <div className="computer_model_container text-white h-full w-full flex justify-center items-center">
          {isSmallScreen ? (
            <Lottie animationData={tech} loop autoplay />
          ) : (
            <ComputerCanvas />
          )}
        </div>
      </section>

      <Overview />
      <Experiences />
      {!isSmallScreen && <Tech />}
      <Work />
      <Contact />
    </div>
  )
}
