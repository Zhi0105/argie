import { IteratedText } from "@_components/Partials/IteratedText"

export const About = () => {
  return (
    <div className='about_main min-h-screen min-w-screen grid grid-cols-1 place-items-center px-8'>
      <div 
        className='index_container h-full w-full grid grid-cols-2
          xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2
        '
      > 

          <div className='flex flex-col gap-8 py-16 px-4 text-white'>
              <IteratedText 
                text="Me, Myself & I" 
                styles="greet_detail text-[#08FFD4] flex flex-row font-bold text-6xl"
              />
              
              <p className='indent-8'>
                I want to obtain the position that I can use to develop my knowledge and skills through modern technologies and to provide strong contribution in company's goal that will help to the development and to provide the best opportunity and achievements.
              </p>
              <p className='indent-8'>
              Well-organised person, problem solver, independent employee with high attention to detail. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
              </p>
              <p className='indent-8'>
              Interested in the entire frontend/backend spectrum and working on ambitious projects with positive people.
              </p>
          </div>
          <div className='textsphere flex flex-col justify-center items-center text-white'>
            <label>tagcloud</label>
            <label>tagcloud</label>
            <label>tagcloud</label>
            <label>tagcloud</label>
            <label>tagcloud</label>
            <label>tagcloud</label>
            <label>tagcloud</label>

          </div>
      </div>
    </div>
  )
}
