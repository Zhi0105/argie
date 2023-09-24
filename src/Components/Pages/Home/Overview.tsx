import{ FC, useEffect, useState } from 'react'
import { Tilt } from 'react-tilt'
import { serviceInterface, serviceCardInterface } from '@_src/types/interface'
import { motion } from 'framer-motion'
import { WebCanvas } from '@_src/Components/Partials/Canvas/WebCanvas'
import { ReactCanvas } from '@_src/Components/Partials/Canvas/ReactCanvas'
import { AnimeCanvas } from '@_src/Components/Partials/Canvas/AnimeCanvas'
import { NativeCanvas } from '@_src/Components/Partials/Canvas/NativeCanvas'


const services:serviceInterface[] = [
  { title: "React Js Developer", icon: <ReactCanvas /> },
  { title: "Web Developer", icon: <WebCanvas /> },
  { title: "React Native Developer", icon: <NativeCanvas /> },
  { title: "ヲタク", icon: <AnimeCanvas /> }
]

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
const ServiceCard:FC<serviceCardInterface> = ({ title, icon, index }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);  
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  const handleDelay = (index: number):number => {
    if(screenWidth < 1000) {
      return 0
    }
      return 0.1 + index
  }

  return (
    <motion.div
      initial="hidden"
      whileInView={{ x: [ 100, 70, 50, 0 ], opacity: [0, 0.1, 0.5, 1] }}
      transition={{ type: "spring", stiffness: 400, delay: handleDelay(index), duration: 0.1, ease: "easeInOut" }}
      key={index}
    >
        <Tilt 
        key={index} 
        options={defaultOptions} 
        style={{ height: 250, width: 200 }}
        className="rounded-xl shadow-lg shadow-[#08FFD4] mt-8"
      >
        <div 
          className='w-full h-full flex flex-col justify-center items-center'
        >
          <div className='h-1/2 w-full'>{icon}</div>
          <label className='text-[#FAC334]'>{title}</label>
        </div>
      </Tilt>
    </motion.div>
  )
}

export const Overview = () => {
  return (
    <div className='overview_main min-h-screen w-screen flex flex-col text-white gap-4 px-16'>
      <h1 className="uppercase text-base text-gray-300 font-bold">introduction</h1>
      <h1 className="capitalize text-5xl font-bold">overview.</h1>
      <p> I'm a skilled software developer with experience in Typescript and Javascript, and expertise in frameworks like React, Node js, and Three js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>

      <motion.div
        className="w-full flex justify-center items-center gap-12 flex-wrap"
      >
        {services.map(( service:serviceInterface, index:number ) => {
            return(
              <span key={index}>
                <ServiceCard title={service.title} index={index} icon={service.icon}/>
              </span>
            )
        })}
      </motion.div>
    </div>
  )
}
