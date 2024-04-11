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

import firebase from '@_assets/skills/firebase.webp'
import laragon from '@_assets/skills/Laragon.webp'
import node from '@_assets/skills/node js.webp'
import laravel from '@_assets/skills/laravel.webp'
import php from '@_assets/skills/php.webp'

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

export const skillTechnologies: technologyInterface[] = [
  ...technologies,
  { name: "firebase", icon: firebase },
  { name: "laragon", icon: laragon },
  { name: "node", icon: node },
  { name: "laravel", icon: laravel },
  { name: "php", icon: php },
]

export const work: any[] = [
  { 
    id: 1, 
    title: "journal-api",
    description: "Application programming interface and a web service that can integrates user authentication with crud operations of category and task models",
    codeURL: "https://github.com/Zhi0105/journal-api",
    liveURL: "https://journal-api-tbpw.onrender.com/",
    endpoints: "./JournalAPI.postman_collection.json"
  }, 
  { 
    id: 2, 
    title: "journal-app",
    description: "Enhanced Todo Application that can perform journalizing and categorizing user tasks",
    codeURL: "https://github.com/Zhi0105/journal-app",
    liveURL: "https://filofax.vercel.app/"
  }, 
  { id: 3, 
    title: "learnmaterial-api",
    description: "Application programming interface and a web service that can integrates user authentication with crud operations of classlevel, category, material, question, answer, language, translation models",
    codeURL: "https://github.com/Zhi0105/learnmatsapi",
    liveURL: "https://learnmatsapi.onrender.com/",
    endpoints: "./LearnMatsAPI.postman_collection.json"
  }, 
  
  { id: 4,
    title: "learnmaterial-cms",
    description: "Content Management System as graphical user interface of learnmaterial api intergrations",
    codeURL: "https://github.com/Zhi0105/learnmatscms",
    liveURL: "https://learnmatscms.vercel.app/" 
  }, 
  
  { id: 5, 
    title: "learnmaterial-application",
    description: 
      `Mobile application that can perform user authentications, app language translations, user can choose material and answer the following question multiple choice categorized by class level,
      and lastly, user can view their result based on what material they choosed.
      `
    ,
    codeURL: "https://github.com/Zhi0105/learnmatsapp",
  },
  { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 },
]