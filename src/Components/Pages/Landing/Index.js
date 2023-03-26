import React from 'react'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { downloadCV } from '../../../utils/helpers'

export const Index = () => {
  return (
    <div className='index_main min-h-screen flex flex-row justify-around items-center'>
      
      <div className="greet_container flex flex-col gap-4 text-white">

        {/* START GREET */}
        <div className='greet_detail font-bold text-2xl'>
            <div>
              Hello, It's Me
            </div>
        </div>
        {/*  END GREET  */}

        {/* START NAME */}
        <div className='greet_detail_fullname flex flex-row gap-2 font-bold text-5xl'>
            <div className='flex flex-row'>
              <div>A</div>
              <div>r</div>
              <div>g</div>
              <div>i</div>
              <div>e</div>
            </div>
            <div className='flex flex-row'>
              <div>B</div>
              <div>a</div>
              <div>r</div>
              <div>c</div>
              <div>e</div>
              <div>n</div>
              <div>a</div>

            </div>
        </div>

        {/* END NAME */}

        {/* START POSITION */}
        <div className='greet_detail_occupation font-bold text-2xl'>
          <div>
            And I'm a <label className='text-[#0ea5e9]'>Software Developer</label>
          </div>
        </div>
        {/*  END POSITION  */}
        

        {/* START GREET */}
        <div className='other_info flex flex-col'>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod.
          </div>
          <div>
            Lorem ipsum dolor asdasd
          </div>
        </div>
      {/*  END GREET  */}

      {/* ICONS START */}
      <div className='links flex flex-row gap-4'>
        <Link to="https://www.linkedin.com/in/argie-barcena/" target='_blank'><FaLinkedin size={28} color='#06b6d4' /></Link>
        <Link to="https://www.facebook.com/aia.argie" target='_blank'><FaFacebook size={28} color='#06b6d4' /></Link>
        <Link to="#"><MdMail size={28} color='#06b6d4' /></Link>
        <Link to="https://github.com/Zhi0105" target='_blank'><FaGithub size={28} color='#06b6d4' /></Link>
      </div>
      {/* ICONS END */}

      <div className="cv_download">
        <button onClick={() => downloadCV('http://localhost:3000/public/argie.pdf')} 
        className="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#06B6D4] rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#06B6D4] group-hover:translate-x-0 ease">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Download CV</span>
          <span className="relative invisible">Download CV</span>
        </button>
      </div>
      
      </div>        

      <div className='text-white'>
        Image goes here!
      </div>
    
    </div>
  )
}
