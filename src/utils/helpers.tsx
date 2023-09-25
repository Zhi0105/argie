import { experienceInterface, technologyInterface } from "@_src/types/interface";
import { ISE, FS, E } from '@_components/Lazy/LazyImage'
import html from '@_assets/skills/html.webp'
import css from '@_assets/skills/css.webp'
import js from '@_assets/skills/js.webp'
import react from '@_assets/skills/react-js.webp'
import next from '@_assets/skills/next js.webp'
import git from '@_assets/skills/git.webp'
import wp from '@_assets/skills/wordpress.webp'
import mysql from '@_assets/skills/mysql.webp'
import reactnative from '@_assets/skills/react-native.webp'
import typescript from '@_assets/skills/typescript.webp'

export const experiences: experienceInterface[] = [
  {
    logo: <ISE width={50} height={50} />,
    company: "Codetech IT Solutions",
    year: "2016-2017",
    role: "Junior system developer",
    description: [
      "Developing payroll system based on clients policy using vb.net & MSSQL",
      "Updating client's reports based on their need format using crystal report application."
    ]
  },
  {
    logo: <E width={40} height={40} />,
    company: "Big E Food Corporation",
    year: "2017-2020",
    role: "Office staff",
    description: [
      "Counter checking outbound deliveries",
      "Receiving returned items",
      "Receiving outbound documents",
      "Processing credit of return items",
      "Processing charges to truckers",
      "Validating invoice cancelled to avoid discrepancies",
      "Validating actual stocks of return vs. product return slip"
    ]
  },
  {
    logo: <FS width={40} height={40} />,
    company: "Flowerstore.ph",
    year: "2022 - current",
    role: "Software Developer",
    description: [
      "React Native Developer",
      "React Js Developer",
      "Next Js Developer",
    ]
  },
]

export const technologies: technologyInterface[] = [
  { name: "html", icon: html },
  { name: "css", icon: css },
  { name: "javascript", icon: js },
  { name: "react", icon: react },
  { name: "next", icon: next },
  { name: "git", icon: git },
  { name: "wordpress", icon: wp },
  { name: "mysql", icon: mysql },
  { name: "reactnative", icon: reactnative },
  { name: "typescript", icon: typescript }
]