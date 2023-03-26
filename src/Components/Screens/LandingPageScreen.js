import React from 'react'
import { PageTemplate } from '../../Template/PageTemplate'
import { LandingPage } from '../Pages/LandingPage'
import { Particle } from '../Particles/Particle'

export const LandingPageScreen = () => {
  return (
    <PageTemplate>
      <Particle />
      <LandingPage />
    </PageTemplate>
  )
}
