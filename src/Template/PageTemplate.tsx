import { motion } from 'framer-motion'
import { useRouteStore } from '@_src/assets/Store/RouteStore'
import { useState, useEffect } from 'react'
import { Preload } from '@_src/Components/Lazy/Preload'
import { Particle } from '@_src/Components/Particles/Particle'
import { Navbar } from '@_src/Navigation/Navbar'
import _ from 'lodash'

export const PageTemplate = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const { route } = useRouteStore((state) => ({ //ROUTE STORE
    route: state.route,
}))
useEffect(() => { // HANDLE PRELOADER WHEN ROUTE CHANGE
  if(route){
    setLoading(true)
    _.delay(() => {
      setLoading(false)
    }, 2500)
  }
}, [route, setLoading])

if(loading){
  return (
   <Particle>
     <Preload loading={loading}/>
   </Particle>
  )
}

  return (
    <motion.div className='template_main shadow-current'>
      {route.pathname !== '/' && <Navbar /> }
      <div className='mb-28'>
        {children}
      </div>
    </motion.div>
  )
}