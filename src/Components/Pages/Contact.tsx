import { PlanetCanvas } from "@_src/Components/Partials/Canvas/PlanetCanvas";
import { ContactForm } from "../Partials/Forms/ContactForm";
import { useRouteStore } from '@_src/assets/Store/RouteStore'
import { motion } from 'framer-motion'
import { useEffect, useState } from "react"
import Lottie from "lottie-react";
import envelop from '@_assets/envelop.json'


export const Contact = () => {
  const { route } = useRouteStore((state) => ({ //ROUTE STORE
    route: state.route,
  }))

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

  if(route.pathname === '/'){
    return (
      <div className='overview_main min-h-screen w-screen grid grid-cols-1 px-16 text-center'>
        <div 
        className='contact_container h-full w-full grid grid-cols-2
          xs:grid-cols-1 xs:gap-16 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2
        '
      > 
        <motion.div 
          initial="hidden"
          whileInView={{ y: [ 100, 70, 50, 0 ], opacity: [0, 0.1, 0.5, 1] }}
          transition={{ type: "spring", stiffness: 400, duration: 0.1, ease: "easeInOut" }}

          className="w-full h-full flex justify-center items-center">
          {screenWidth < 800 ? 
            <Lottie animationData={envelop}/> :
            <div className="w-[70vw] h-[60vh]">
              <PlanetCanvas />
            </div>
          }
          
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView={{ x: [ 100, 70, 50, 0 ], opacity: [0, 0.1, 0.5, 1] }}
          transition={{ type: "spring", stiffness: 400, duration: 0.1, ease: "easeInOut" }}
        >
          <ContactForm />  
        </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className='contact_main min-h-screen min-w-screen grid grid-cols-1 place-items-center px-8'>
      <div 
        className='contact_container h-full w-full mt-[10%] grid grid-cols-2
          xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2
        '
      > 
        <div className="w-full h-full flex justify-center items-center">
        {screenWidth < 800 ? 
            <Lottie animationData={envelop} /> :
            <div className="xs:w-[100vw] xs:h-[50vh] sm:w[100:vw] sm:h-[60vh] w-[60vw] h-[50vh]">
              <PlanetCanvas />
            </div>
          }
        </div>

        <ContactForm />  

      </div>
  </div>

  )
}
