import { technologies } from "@_src/utils/helpers"
import { technologyInterface } from "@_src/types/interface"
import { BallCanvas } from "@_src/Components/Partials/Canvas/BallCanvas"

export const Tech = () => {
  return (
    <div className='tech_main min-h-auto w-screen grid grid-cols-1 place-items-center py-32 px-16 text-center'>
      <div className="xs:w-full sm:w-3/4 w-1/2 flex flex-row justify-center flex-wrap gap-2 px-12">
          {technologies.map((technology: technologyInterface) => {
            return (
                <div className="w-20 h-20" key={technology.name}>
                  <BallCanvas icon={technology.icon}/>
                </div>
            ) 
          })}
      </div>
    </div>
  )
}
