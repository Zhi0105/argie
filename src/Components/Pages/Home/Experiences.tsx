import { FC } from 'react'
import { motion } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { experienceInterface, experienceCardInterface } from '@_src/types/interface';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '@_src/utils/helpers';

const ExperienceCards:FC<experienceCardInterface> = ({ experience }) => {
  return(
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: '7px solid #08FFD4' }}
      date={experience.year}
      iconStyle={{ background: "#FAC334" }}
      icon={
        <div className='h-full w-full grid place-items-center'>
          {experience.logo}
        </div>
      }
    >
      <div className='flex flex-col gap-2'>
        <h3 className='text-white text-xl font-bold'>
          {experience.role}
        </h3>
        <h3>({experience.company})</h3>
        <ul className='flex flex-col list-disc ml-8 space-y-2'>
          {experience.description.map(( item: string, index: number ) => {
            return (
              <li key={index} className='pl-1'>
                {item}
              </li>
            )
          })}
        </ul>
      </div>
    </VerticalTimelineElement>
  )
}

export const Experiences = () => {
  return (
    <div className='overview_main min-h-screen w-screen flex flex-col text-white gap-4 px-16 mt-16'>
      <motion.div
        initial="hidden"
        whileInView={{ y: [ 100, 70, 50, 0 ], opacity: [0, 0.1, 0.5, 1] }}
        transition={{ type: "spring", stiffness: 400, duration: 0.1, ease: "easeInOut" }}
        className='fle flex-col gap-8'
      >
        <h1 className="uppercase text-base text-gray-300 font-bold">what i have done so far</h1>
        <h1 className="capitalize text-5xl font-bold">Work Experience.</h1>
      </motion.div>

      <div className='w-full flex flex-col justify-center mt-8'>
        <VerticalTimeline>
          {experiences.map(( experience:experienceInterface, index: number ) => {
              return (
                <ExperienceCards experience={experience} key={index} />
              )
          })}
        </VerticalTimeline>
      </div>
    </div>
  )
}