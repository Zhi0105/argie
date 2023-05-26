import TagCloud from 'TagCloud';
import React, { useEffect } from 'react'
import '../../assets/css/textsphere.css'

export const TextSphere = () => {

  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "Html",
        "CSS",
        "JavaScript",
        "React",
        "Lavavel",
        "API",
        "JSON",
        "SQL",
        "NodeJS",
        "Nuxt",
        "NextJS",
        "Vue",
        "NodeJS",
        "React Native",
        "Ruby on Rails",
        "Wordpress",
        "Babel",
        "Jquery",
        "ES6",
        "Git",
      ];

      const options = {
        radius: 280,
        maxSpeed: "normal",
        initSpeed: "fast",
        direction: 135,
        keep: true
    }

      TagCloud(container, texts, options)
    }
  }, [])

  return (
      <span className='tagcloud font-bold text-xl text-[#293548]'></span>
    )
}
