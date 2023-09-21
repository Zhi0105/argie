import { PageTemplate } from "@_src/Template/PageTemplate"
import { Particle } from "@_components/Particles/Particle"
import { Work } from "@_components/Pages/Work"

export const WorkScreen = () => {
  return (
    <PageTemplate>
      <Particle>
        <Work />
      </Particle>
    </PageTemplate>
  )
}
