import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { IteratedText } from './IteratedText'
import { Initial } from '../Lazy/LazyImage'
import { MdMail } from 'react-icons/md'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'
import Typical from 'react-typical'
import cv from '@_assets/argie.pdf'
import { useRouteStore } from '@_src/assets/Store/RouteStore'

export const Greet = () => {
  const {  setActiveRoute } = useRouteStore((state) => ({ //ROUTE STORE
    setActiveRoute: state.setActiveRoute
}))
  return (
    <>
      {/* DESKTOP */}
      <div 
        className='greet_main text-white flex flex-col justify-center
        xs:hidden sm:hidden md:hidden lg:flex xl:flex
        lg:h-full lg:w-full xl:h-full xl:w-full

      '>
        <motion.div
          animate={{ 
            y: [ 100, 70, 50, 0 ],
            opacity: [0, 0.1, 0.5, 1]
          }}
          transition={{ type: "spring", stiffness: 400, delay: 2, duration: 1, ease: "easeInOut" }}
        >
          <IteratedText 
              text="Hello," 
              styles="greet_detail flex flex-row font-bold text-5xl lg:text-4xl xl:text-5xl"
          />
        </motion.div>

        <div className='greet_name flex flex-row gap-2 font-bold text-6xl lg:text-5xl xl:text-6xl'>
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

          <div className='flex'>
            <Initial width={70} height={70} />
            <motion.div
              animate={{ 
                x: [-100, 0],
                opacity: [0, 0.1, 0.5, 1],
                rotate: [0, 360],
              }}
              transition={{ type: "spring", stiffness: 400, delay: 2.8, duration: 1, ease: "easeInOut" }}
            >
              <IteratedText 
                text="rgie,"
                styles="flex flex-row"
              />  
            </motion.div>
          </div>
        </div>

        <div className='greet_info flex flex-row gap-2 font-bold text-4xl lg:text-3xl xl:text-4xl'>
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
            <IteratedText text="Software Developer"styles="flex flex-row text-[#08FFD4]" />
          </motion.div>
        </div>

        <div className='greet_message flex flex-col'>
            <label>Never stop learning.</label>
            <Typical
              steps={['Focus on being productive instead of being busy.', 1000, "It’s not a bug — it’s an undocumented feature.", 1000]}
              loop={Infinity}
              wrapper="p"
            />
        </div>

        <div className='links flex flex-row gap-4 mt-2'>
          <Link to="https://www.linkedin.com/in/argie-barcena/" target='_blank'><FaLinkedin size={28} color='#08FFD4'/></Link>
          <Link to="https://www.facebook.com/aia.argie" target='_blank'><FaFacebook size={28} color='#08FFD4'/></Link>
          <Link to="#"><MdMail size={28} color='#08FFD4'/></Link>
          <Link to="https://github.com/Zhi0105" target='_blank'><FaGithub size={28} color='#08FFD4'/></Link>
        </div>

        <motion.div 
            className="btn_abouts flex gap-6 mt-3"
          >
          <a 
          href={cv}
          className="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-[#08FFD4] transition duration-300 ease-out border-2 border-[#08FFD4] rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#06B6D4] group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Download CV</span>
            <span className="relative invisible">Download CV</span>
          </a>
          <Link 
          to="/about"
          onClick={() => setActiveRoute('about')}
          className="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-[#08FFD4] transition duration-300 ease-out border-2 border-[#08FFD4] rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#06B6D4] group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">About Me</span>
            <span className="relative invisible">About me</span>
          </Link>
        </motion.div>
      </div>
      {/* DESKTOP */}
      {/* MOBILE VIEW */}
      <div className='greet_mobile_main text-white flex flex-col justify-center pl-20 pb-10
        xs:flex sm:flex md:flex lg:hidden xl:hidden
      '>

        <label className='font-bold text-5xl lg:text-4xl xl:text-5xl'>
            Hello,
        </label>
        
        <div className='greet_name flex flex-row gap-2 font-bold text-6xl xs:text-5xl lg:text-5xl xl:text-6xl'>
          <label>I'm</label>
          <div className='flex'>
            <Initial width={50} height={50} />
            <label>rgie</label>
          </div>
        </div>
        
        <div className='greet_info font-bold text-4xl 
          xs:text-2xl lg:text-3xl xl:text-4xl
        '>
          <label className='text-[#08FFD4]'>Software Developer</label>
        </div>

        <div className='links flex flex-row gap-4 mt-2'>
          <Link to="https://www.linkedin.com/in/argie-barcena/" target='_blank'><FaLinkedin size={20} color='#08FFD4'/></Link>
          <Link to="https://www.facebook.com/aia.argie" target='_blank'><FaFacebook size={20} color='#08FFD4'/></Link>
          <Link to="#"><MdMail size={20} color='#08FFD4'/></Link>
          <Link to="https://github.com/Zhi0105" target='_blank'><FaGithub size={20} color='#08FFD4'/></Link>
        </div>

        <div 
          className="btn_abouts flex gap-6 mt-3"
        >
          <a 
          href={cv}
          className="relative inline-flex items-center justify-center p-4 overflow-hidden font-medium text-[#08FFD4] transition duration-300 ease-out border-2 border-[#08FFD4] rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#06B6D4] group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Download CV</span>
            <span className="relative invisible">Download CV</span>
          </a>
          <Link 
          to="/about"
          onClick={() => setActiveRoute('about')}
          className="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-[#08FFD4] transition duration-300 ease-out border-2 border-[#08FFD4] rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#06B6D4] group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">About Me</span>
            <span className="relative invisible">About me</span>
          </Link>
        </div>
      </div>
      {/* MOBILE VIEW */}
    </>
  )
}