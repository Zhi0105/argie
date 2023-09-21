import { PageTemplate } from "@_src/Template/PageTemplate"
import { Particle } from "@_components/Particles/Particle"
import { Contact } from "@_components/Pages/Contact"

export const ContactScreen = () => {
  return (
    <PageTemplate>
      <Particle>
        <Contact />
      </Particle>
    </PageTemplate>
  )
}
