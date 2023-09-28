import React from "react"

export interface serviceInterface {
  icon?: React.JSX.Element
  title: string
}

export interface serviceCardInterface extends serviceInterface {
  index: number,
}

export interface experienceInterface {
  logo?: React.JSX.Element
  company: string,
  role: string,
  year: string,
  description: string[]
}

export interface experienceCardInterface {
  experience: experienceInterface,
  key?: number
}

export interface technologyInterface {
  name: string,
  icon?: string
}
