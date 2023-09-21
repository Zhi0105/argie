import { Fsattendance } from "@_components/Lazy/LazyImage"
import { Fsmobile } from "@_components/Lazy/LazyImage"
import { FspoticoProduct } from "@_components/Lazy/LazyImage"
import { Fsweb } from "@_components/Lazy/LazyImage"
import { Fspotico } from "@_components/Lazy/LazyImage"

import { ProjectCards } from "@_components/Partials/cards/ProjectCards"

export const Work = () => {
  return (
    <div className='work_main min-h-screen p-8'>
      <div className="web_application_list p-8 grid grid-cols-2 place-items-center gap-20">
        <ProjectCards 
          image={[ <Fspotico />, <FspoticoProduct /> ]}
          descriptionName={"flowerstore potico app (TH & VN Server)"}
          stack={[
            "react-native", "react-query", "graphql", "laravel", "nodejs"
          ]}
        />
          <ProjectCards 
          image={[ <Fsmobile /> ]}
          descriptionName={"flowerstore mobile app (PH server)"}
          stack={[
            "react-native", "react-query", "graphql", "laravel", "nodejs"
          ]}
        />
          <ProjectCards 
          image={[ <Fsweb /> ]}
          descriptionName={"flowerstore website v3"}
          stack={[
            "nextjs", "tailwindcss", "react-query", "laravel", "typescript"
          ]}
        />
          <ProjectCards 
          image={[ <Fsattendance /> ]}
          descriptionName={"flowerstore attendance system"}
          stack={[
            "laravel", "tailwind", "php", "nodejs", "blade"
          ]}
        />
      </div>
    </div>
  )
}
  