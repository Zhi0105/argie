import { useEffect } from 'react'
import {  Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useRouteStore } from '@_src/assets/Store/RouteStore'

// Screen
import { HomeScreen } from '@_src/Components/Screens/HomeScreen'
import { AboutScreen } from '@_src/Components/Screens/AboutScreen'
import { SkillScreen } from '@_src/Components/Screens/SkillScreen'
import { ContactScreen } from '@_src/Components/Screens/ContactScreen'


export const RouteList = () => {
  const location = useLocation()
  const { setRoute } = useRouteStore((state) => ({
    setRoute: state.setRoute
}));

useEffect(() => {
  setRoute(location)
  console.log(location)
}, [location])
  
  return (
    <AnimatePresence initial={false}>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/skill" element={<SkillScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
    </Routes>
  </AnimatePresence>
  )
}
