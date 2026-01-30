/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { motion } from "framer-motion"
import Typical from "react-typical"
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"

export const About = (props: any) => {
  const { setSection } = props
  return (
    <React.Fragment>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic">Argie</span>
      </h1>
      <motion.div 
        className="text-lg text-gray-900 mt-4"
        initial={{
          opacity: 0,
          y: 25
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 1,
          delay: 1.5
        }}
      >
        <div className="greet_message mt-3 text-sm sm:text-base md:text-lg">
          <label className="block mb-1 opacity-80">Never stop learning.</label>
          <Typical
            steps={[
              'Focus on being productive instead of being busy.',
              2000,
              'It’s not a bug — it’s an undocumented feature.',
              2000
            ]}
            loop={Infinity}
            wrapper="p"
          />

          <div className="flex flex-row gap-4 mt-4">
            <a href="https://www.linkedin.com/in/argie-barcena/" target="_blank">
              <FaLinkedin size={24} className="text-[#4F46E5] hover:text-[#1c17a7] transition-colors" />
            </a>
            <a href="https://www.facebook.com/aia.argie" target="_blank">
              <FaFacebook size={24} className="text-[#4F46E5] hover:text-[#1c17a7] transition-colors" />
            </a>
            <a href="https://github.com/Zhi0105" target="_blank">
              <FaGithub size={24} className="text-[#4F46E5] hover:text-[#1c17a7] transition-colors" />
            </a>
            
          </div>
        </div>
      </motion.div>
      <motion.div 
        className="flex gap-2"
        initial={{
          opacity: 0,
          y: 25
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 1,
          delay: 2
        }}
      >
        <button
          onClick={() => setSection(3)}
          className={`bg-indigo-600 text-white py-2 px-4 md:py-4 md:px-8 rounded-lg font-bold text-xs md:text-base mt-4 md:mt-16`}
        >
          Contact me
        </button>
        <a
          href="./cv.pdf"
          className={`bg-indigo-600 text-white py-2 px-4 md:py-4 md:px-8 rounded-lg font-bold text-xs md:text-base mt-4 md:mt-16`}
        >
          <span className="flex items-center gap-2">
            Download CV
          </span>
        </a>
      </motion.div>
    </React.Fragment>
  )
}
