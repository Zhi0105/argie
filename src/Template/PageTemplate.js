import React from 'react'
import { Navbar } from '../Navigation/Navbar'
import { motion  } from 'framer-motion'
export const PageTemplate = ({ children }) => {


  return (
    <>
    <Navbar />
    <motion.div 
      className='template_main shadow-current'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: .5 } }}
      >
      {children}
    </motion.div>
    </>
  )
}
