import React, { FC } from "react"
import { FaGithub, FaShare } from "react-icons/fa"

interface ProjectCardsInterface {
  image: React.JSX.Element[],
  stack: string[],
  descriptionName: string
}

export const ProjectCards: FC<ProjectCardsInterface> = ({ 
  image = [],
  stack = [],
  descriptionName
 }) => {
  return (
    <div className="uxhover image-container h-full w-full text-center">
      <div className="flex h-full w-full">
        {image.length && image.map((item, index) => {
          return (
            <React.Fragment key={index}>
            {item}
            </React.Fragment>
          )
        })}
      </div>
      <div className="description">
        <h2>{descriptionName}</h2>
        <div className="flex gap-6">
          <p className="w-[3.6rem] h-[3.6rem] bg-white rounded-full flex justify-center items-center">
            <FaGithub size={50} className="text-black"/>
          </p>
          <p className="w-[3.6rem] h-[3.6rem] bg-white rounded-full flex justify-center items-center">
            <FaShare size={50} className="text-black"/>
          </p>
        </div>

        <div className="grid grid-cols-5 gap-4 mt-5 mx-12">
          {stack.length && stack.map((item: string, index: number) => {
            return (
              <p key={index} className="text-sm  flex flex-grow-1 items-center justify-center font-medium align-middle shrink my-1 shadow-2xl shadow-[#08FFD4] border border-[#08FFDA] whitespace-nowrap bg-[#1D1D1D] rounded">
                <label className="text-[#FAC334] px-3 py-1">{item}</label>
              </p>   
            )
          })}
        </div>  
      </div>
    </div>
  )
}
