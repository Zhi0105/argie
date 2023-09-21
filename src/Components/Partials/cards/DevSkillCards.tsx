import { FC } from 'react'

interface DevSkillCardsInterface {
  progress: React.JSX.Element,
  title: string,
  description: string,
}
export const DevSkillCards:FC<DevSkillCardsInterface> = ({ progress, title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl">
      <div className="px-6 py-4 flex flex-col justify-center items-center">
        {progress}
        <div className="font-bold text-lg mt-2 mb-2 leading-5 text-[#FAC334]">{title}</div>
        <p className="text-white text-xs">
          {description}
        </p>
      </div>
  </div>
  )
}
