import { PageTemplate } from "@_src/Template/PageTemplate"
import { Particle } from "@_components/Particles/Particle"
import { About } from "@_components/Pages/About"

export const AboutScreen = () => {
  return (
    <PageTemplate>
      <Particle>
        <About />
      </Particle>
    </PageTemplate>
  )
}
