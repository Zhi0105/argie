import { Greet } from '@_components/Partials/Greet'
import { ComputerCanvas } from '@_components/Partials/ComputerCanvas'

export const Home = () => {
  
  return (
    <div className='index_main min-h-screen min-w-screen grid grid-cols-1 place-items-center'>
    <div 
      className='index_container h-full w-full grid grid-cols-2
        xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2
      '
    > 

      <Greet />
      <div 
        className='computer_model_container text-white
         xs:h-3/4 sm:h-3/4 md:h-3-/4 lg:h-full lg:w-full xl:h-full xl:w-full
      '>
        <ComputerCanvas />
      </div>
   
    </div>
  </div>
  )
}
