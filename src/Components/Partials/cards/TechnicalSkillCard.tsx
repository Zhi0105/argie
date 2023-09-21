import { FC } from 'react'

interface technicalSkillCardInterface {
  language: string,
  value: string,
  color: string
}

export const TechnicalSkillCard: FC<technicalSkillCardInterface> = ({ language, value, color }) => {
  return (
    <div className="tech_skill_card_main">
      <div className="flex items-center justify-between">
        <span className="text-sm text-[#08FFD4]">{language}</span>
        <span className="px-2 py-1 rounded-lg text-xs text-[#FAC334] font-medium text-center">{value.substring(0,2)}%</span>
      </div>
      <div className="w-full bg-slate-100 h-1 mb-6 mt-2">
        <div className="h-1 rounded" style={{ width: value, background: color }}></div>
      </div>
    </div>   
  )
}
