/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion"
import React from "react"

export const About = (props: any) => {
  const { setSection } = props
  return (
    <React.Fragment>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic">Argie</span>
      </h1>
      <motion.p 
        className="text-lg text-gray-600 mt-4"
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, fugiat.
        {/* I'm a skilled software developer with experience in Typescript and Javascript, and expertise in frameworks like React, Node js, and Three js.  */}
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        {/* I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life! */}
      </motion.p>
      <motion.button
        onClick={() => setSection(3)}
        className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-4 md:mt-16`}
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
        Contact me
      </motion.button>
    </React.Fragment>
  )
}
