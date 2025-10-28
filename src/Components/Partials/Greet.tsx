import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { IteratedText } from './IteratedText'
import { Initial } from '../Lazy/LazyImage'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'
import Typical from 'react-typical'
import { useRouteStore } from '@_src/assets/Store/RouteStore'

export const Greet = () => {
  const { setActiveRoute } = useRouteStore((state) => ({
    setActiveRoute: state.setActiveRoute
  }))

  return (
    <div
  className="
    greet_main text-white flex flex-col 
    justify-start lg:justify-center   /* not centered on small, centered on large */
    h-full w-full 
    px-6 sm:px-10 md:px-12 lg:px-0 
    pt-24 sm:pt-28 md:pt-32 lg:pt-0   /* add top spacing only on small screens */
    transition-all duration-300
  "
>
      {/* Greeting Text */}
      <div className="flex flex-col gap-2">
        <motion.div>
          <IteratedText
            text="Hello,"
            styles="font-bold text-4xl sm:text-5xl md:text-6xl"
          />
        </motion.div>

        <div className="flex flex-row items-center gap-2 font-bold text-5xl sm:text-6xl md:text-7xl">
          <motion.div>
            <IteratedText text="I'm" styles="flex flex-row" />
          </motion.div>
          <div className="flex items-center gap-1">
            <Initial width={50} height={50} />
            <motion.div>
              <IteratedText text="rgie" styles="flex flex-row" />
            </motion.div>
          </div>
        </div>

        <div className="font-bold text-3xl sm:text-4xl md:text-5xl mt-2">
          <IteratedText
            text="Software Developer"
            styles="text-[#08FFD4]"
          />
        </div>

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
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-row gap-4 mt-4">
        <Link to="https://www.linkedin.com/in/argie-barcena/" target="_blank">
          <FaLinkedin size={24} className="text-[#08FFD4] hover:text-[#06B6D4] transition-colors" />
        </Link>
        <Link to="https://www.facebook.com/aia.argie" target="_blank">
          <FaFacebook size={24} className="text-[#08FFD4] hover:text-[#06B6D4] transition-colors" />
        </Link>
        <Link to="https://github.com/Zhi0105" target="_blank">
          <FaGithub size={24} className="text-[#08FFD4] hover:text-[#06B6D4] transition-colors" />
        </Link>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-5">
        <a
          href="./cv.pdf"
          className="relative inline-flex items-center justify-center px-6 py-3 font-medium text-[#08FFD4] border-2 border-[#08FFD4] rounded-full transition-all duration-300 ease-out group hover:bg-[#06B6D4] hover:text-white"
        >
          <span className="flex items-center gap-2">
            Download CV
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
        </a>

        <Link
          to="/about"
          onClick={() => setActiveRoute('about')}
          className="relative inline-flex items-center justify-center px-6 py-3 font-medium text-[#08FFD4] border-2 border-[#08FFD4] rounded-full transition-all duration-300 ease-out group hover:bg-[#06B6D4] hover:text-white"
        >
          <span className="flex items-center gap-2">
            Read more
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  )
}
