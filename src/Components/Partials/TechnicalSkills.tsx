import { TechnicalSkillCard } from "./cards/TechnicalSkillCard"

export const TechnicalSkills = () => {
  return (
      <div className="technical_main p-2">
        <div className="skill_container bg-[#1D1D1D] px-8 py-6 shadow-2xl rounded-lg">
          <TechnicalSkillCard language={"html"} value={'95%'} color={"#E44D26"} />
          <TechnicalSkillCard language={"css"} value={'80%'} color={"#214DE5"} />
          <TechnicalSkillCard language={"javascript"} value={'90%'} color={"#F5DE19"} />
          <TechnicalSkillCard language={"React"} value={'90%'} color={"#61DAFB"} />
          <TechnicalSkillCard language={"Next"} value={'90%'} color={"#000000"} />
          <TechnicalSkillCard language={"react native"} value={'90%'} color={"#61DAFB"} /> 
          <TechnicalSkillCard language={"typescript"} value={'90%'} color={"#017ACC"} /> 
          <TechnicalSkillCard language={"wordpress"} value={'95%'} color={"#0087BE"} />
          <TechnicalSkillCard language={"laravel"} value={'65%'} color={"#FF291B"} />
          <TechnicalSkillCard language={"mysql"} value={'90%'} color={"#187093"} />
          <TechnicalSkillCard language={"php"}  value={'65%'} color={"#6181B6"} />
          {/* <TechnicalSkillCard language={"node js"} value={'60%'} color={"#3F863E"} /> */}
        </div>
      </div>
      
    )
}
