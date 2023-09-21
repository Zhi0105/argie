import { CircularProgress } from './CircularProgress';
import { DevSkillCards } from './cards/DevSkillCards';

export const DevSkill = () => {
  return (
    <div className="roadmap_main">
      <div className="card_container bg-[#1D1D1D] p-6 grid grid-cols-3 gap-4 shadow-2xl">
        
        <DevSkillCards
          progress={ <CircularProgress width={100} height={100} value={80} icon={"brush"} rgb={"8, 255, 212"} /> }
          title={"Design + Development"}
          description={`Clean, modern designs, optimized for performancce, search engines,
          and converting users to customers.`}
          />
        
        <DevSkillCards
          progress={ <CircularProgress width={100} height={100} value={85} icon="code" rgb={"8, 255, 212"} /> }
          title={"Technology"}
          description={`Combined all the latest technologies to a progressive website.`}
        />

        <DevSkillCards
          progress={ <CircularProgress width={100} height={100} value={80} icon="mobile" rgb={"8, 255, 212"} /> } 
          title={"Always Responsive"}
          description={`A responsive design makes your website accessible to all users,
          regardless of their device.`}
        />

      </div>
    </div>
  )
}
