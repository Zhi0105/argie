import React from 'react'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { downloadCV } from '../../../utils/helpers'
import { DevImage } from '../../Lazy/LazyImage'
import { motion } from 'framer-motion'
import { IteratedText } from '../../Partials/IteratedText'
import Typical from 'react-typical'

export const Index = () => {
  
  return (
    <div className='index_main min-h-screen flex flex-row justify-evenly items-center'>
      <div className="greet_container flex flex-col gap-4 text-white">

          <motion.div
            animate={{ 
              y: [ 100, 70, 50, 0 ],
              opacity: [0, 0.1, 0.5, 1]
            }}
            transition={{ type: "spring", stiffness: 400, delay: 2, duration: 1, ease: "easeInOut" }}
          >
            <IteratedText 
                text="Hello," 
                styles="greet_detail flex flex-row font-bold text-5xl"
            />
          </motion.div>


        <div className='greet_detail_fullname flex flex-row gap-2 font-bold text-6xl'>
            <motion.div
              animate={{ 
                x: [-100, 0],
                opacity: [0, 0.1, 0.5, 1],
                rotate: [0, 360],
              }}
              transition={{ type: "spring", stiffness: 400, delay: 2.5, duration: 1, ease: "easeInOut" }}
            >
              <IteratedText 
                text="I'm"
                styles="flex flex-row"
              />
            </motion.div>

            <motion.div
              animate={{ 
                x: [-100, 0],
                opacity: [0, 0.1, 0.5, 1],
                rotate: [0, 360],
              }}
              transition={{ type: "spring", stiffness: 400, delay: 2.8, duration: 1, ease: "easeInOut" }}
            >
              <IteratedText 
                text="Argie,"
                styles="flex flex-row"
              />  
            </motion.div>
        </div>


        <div className='greet_detail_occupation flex flex-row gap-2 font-bold text-4xl'>
            <motion.div
              animate={{ 
                y: [ -100, -70, -50, 0 ],
                opacity: [0, 0.1, 0.5, 1]
              }}
              transition={{ type: "spring", stiffness: 300, delay: 2.9, duration: 1, ease: "easeInOut" }}
            >
              <IteratedText text="And I'm a" styles="flex flex-row" />
            </motion.div>

            <motion.div
              animate={{ opacity: [0, 0.3, 0.5, 0.7, 1] }}
              transition={{ type: "tween", duration: 2, delay: 3, ease: "easeInOut" }}
            >
              <IteratedText text="Software Developer"styles="flex flex-row text-[#3b82f6]" />
            </motion.div>
        </div>
        <div className='other_info flex flex-col'>
              <label>Never stop learning.</label>
              <Typical
                steps={['Focus on being productive instead of being busy.', 1000, "It’s not a bug — it’s an undocumented feature.", 1000]}
                loop={Infinity}
                wrapper="p"
              />
        </div>
        

        {/* ICONS START */}
        <div className='links flex flex-row gap-4'>
        <Link to="https://www.linkedin.com/in/argie-barcena/" target='_blank'><FaLinkedin size={28} color='#06b6d4' /></Link>
        <Link to="https://www.facebook.com/aia.argie" target='_blank'><FaFacebook size={28} color='#06b6d4' /></Link>
        <Link to="#"><MdMail size={28} color='#06b6d4' /></Link>
        <Link to="https://github.com/Zhi0105" target='_blank'><FaGithub size={28} color='#06b6d4' /></Link>
        </div>
        {/* ICONS END */}

        <motion.div 
          className="cv_download"
          animate={{ 
            y: [ 100, 70, 50, 0 ],
            opacity: [0, 0.1, 0.5, 1]
          }}
          transition={{ type: "tween", delay: 6, duration: 1, ease: "easeInOut" }}
        >
        <button onClick={() => downloadCV('http://localhost:3000/public/argie.pdf')} 
        className="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#06B6D4] rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#06B6D4] group-hover:translate-x-0 ease">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Download CV</span>
          <span className="relative invisible">Download CV</span>
        </button>
        </motion.div>

      </div>    
      <motion.div 
        className='landing_image text-white animate-pulse'
        animate={{
          scale: [1, 2, 2, 1, 1],
          opacity: [0, 0.1, 0.5, 1]
        }}
        transition={{
          duration: 2.5,
          delay: 4
        }}
        >
        <Link to="/about">
          <DevImage 
            width={500}
            height={500}
          />
        </Link>
      </motion.div>
    

    
    </div>
  )
}
