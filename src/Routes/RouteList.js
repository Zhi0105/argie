import React from 'react'
import {  Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// SCreen
import { LandingPageScreen } from '../Components/Screens/LandingPageScreen'
import { AboutScreen } from '../Components/Screens/AboutScreen'
import { SkillScreen } from '../Components/Screens/SkillScreen'
import { ProjectsScreen } from '../Components/Screens/ProjectsScreen'
import { ContactScreen } from '../Components/Screens/ContactScreen'

export const RouteList = () => {
  const location = useLocation()

  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPageScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/skills" element={<SkillScreen />} />
        <Route path="/projects" element={<ProjectsScreen />} />
        <Route path="/contacts" element={<ContactScreen />} />
      </Routes>
    </AnimatePresence>
  )
}
