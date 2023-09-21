import { PageTemplate } from "@_src/Template/PageTemplate"
import { Particle } from "@_components/Particles/Particle"
import { Skill } from "@_components/Pages/Skill"

export const SkillScreen = () => {
  return (
    <PageTemplate>
      <Particle>
        <Skill />
      </Particle>
    </PageTemplate>
  )
}
