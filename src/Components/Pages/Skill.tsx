import { TechnicalSkills } from "@_components/Partials/TechnicalSkills"
import { DevSkill } from "@_components/Partials/DevSkill"
import { skillTechnologies } from "@_src/utils/helpers"
import { technologyInterface } from "@_src/types/interface"
import { BallCanvas } from "../Partials/Canvas/BallCanvas"
import Lottie from 'lottie-react'
import dev from '@_assets/dev.json'

export const Skill = () => {
  return (
    <div className='skill_main min-h-screen grid grid-cols-1'>
      <div className="grid grid-cols-1 w-full mt-[10%] text-center">
        <div className='py-8 text-center flex flex-col'>
            <label className='text-2xl font-bold text-[#08FFD4]'>My Skills</label>
            <label className='text-sm text-white'>I Like to Craft Beautiful And Scalable Web Products</label>
        </div>
        <section 
        className='skill_container h-full grid grid-cols-2
          xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2
        '
        > 
          <div className='roadmap_section flex justify-center'>
            <div className='py-4 px-6 w-full text-center flex flex-col items-center'>
              <label className='text-xl font-bold text-[#08FFD4]'>What I do ?</label>
              <Lottie animationData={dev} />
              <div className="w-full flex flex-row justify-center flex-wrap gap-2 px-12">
              {skillTechnologies.map((technology: technologyInterface) => {
                return (
                    <div className="w-20 h-20" key={technology.name}>
                      <BallCanvas icon={technology.icon}/>
                    </div>
                ) 
              })}
              </div>
            </div>
          </div>

          <div className='technical_section flex justify-center'>
            <div className='py-4 px-6 w-full text-center flex flex-col'>
              <label className='text-xl font-bold mb-4 text-[#08FFD4]'>Technical Skills</label>
              <DevSkill />
              <TechnicalSkills />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 
