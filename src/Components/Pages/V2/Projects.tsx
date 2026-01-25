/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { atom, useAtom } from 'jotai'
import { useEffect, useRef } from "react";
import { Mesh, MeshBasicMaterial } from "three";
import * as THREE from 'three'

export const projects = [
  // {
  //   title: "Wawatmos",
  //   url: "https://r3f-wawatmos-final.vercel.app/",
  //   image: "assets/projects/wawatmos.jpg",
  //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, beatae.",
  // },
  {
    title: "Nuextend Website",
    url: "https://nuextend-web.vercel.app/",
    image: "assets/projects/nuextend.png",
    description: "A responsive web app for managing community projects and volunteers.",
  },
  {
    title: "Nuextend mobile",
    url: "https://github.com/Zhi0105/nuextend-app",
    image: "assets/projects/nuextend_mobile.png",
    description: "A mobile version of NUExtend web application.",
  },
  {
    title: "Nuextend service",
    url: "https://github.com/Zhi0105/nuextend-api",
    image: "assets/projects/nuextend_api.png",
    description: "Provides the backend logic and database integration for NUExtend application.",
  },
  {
    title: "Filofax",
    url: "https://filofax.vercel.app/",
    image: "assets/projects/filofax.png",
    description: "Enhanced Todo Application that can perform journalizing and categorizing user tasks.",
  },
  {
    title: "Filofax service",
    url: "https://github.com/Zhi0105/journal-api",
    image: "assets/projects/journal_api.png",
    description: "web service that can integrates user authentication with crud operations of category and task models",
  },
  {
    title: "learnmats mobile",
    url: "https://github.com/Zhi0105/learnmatsapp",
    image: "assets/projects/learnmats_mobile.png",
    description: "Serve as mobile version of learn material web application",
  },
  {
    title: "learnmats web",
    url: "https://learnmatscms.vercel.app/",
    image: "assets/projects/learnmats_web.png",
    description: "Content Management System as graphical user interface of learnmaterial api intergrations",
  },
  {
    title: "learnmats service",
    url: "https://github.com/Zhi0105/learnmatsapi",
    image: "assets/projects/learnmats_api.png",
    description: "web service for my learn material web application",
  },
];

const Project = (props:any) => {
  const { project, highlighted } = props

  const background = useRef<Mesh>(null)
  const materialRef = useRef<MeshBasicMaterial>(null!);
  const bgOpacity = useMotionValue(0.4)

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4)
  }, [highlighted, bgOpacity])

  useFrame(() => {
    if (!materialRef.current) return;
    materialRef.current.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh 
        ref={background}
        position-z={-0.001} 
        onClick={() => window.open(project.url, "_blank")}
      >
        <planeGeometry args={[2.2, 2]}/>
        <meshBasicMaterial 
          color="black" 
          ref={materialRef}
          transparent 
          opacity={0.4} 
        />
      </mesh>
      <Image 
        scale={[2, 1.2]} 
        url={project.image} 
        toneMapped={false} 
        position-y={0.3} 
      />
      <Text 
        maxWidth={2} 
        anchorX={"left"} 
        anchorY={"top"} 
        fontSize={0.2} 
        position={[-1, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text 
        maxWidth={2} 
        anchorX={"left"} 
        anchorY={"top"} 
        fontSize={0.1} 
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  )
}
export const currentProjectAtom = atom(Math.floor(projects.length / 2))

const ProjectItem = ({ project, index, currentProject }: any) => {
  const ref = useRef<THREE.Group>(null)
  const x = useMotionValue(index * 2.5)
  const y = useMotionValue(0)
  const z = useMotionValue(-3)
  const rotX = useMotionValue(0)
  const rotZ = useMotionValue(0)

  useEffect(() => {
    animate(x, (index - currentProject) * 2.5)
    animate(y, currentProject === index ? 0 : -0.1)
    animate(z, currentProject === index ? -2 : -3)
    animate(
      rotX,
      currentProject === index ? 0 : -Math.PI / 3,
      { type: "spring", stiffness: 120, damping: 18 }
    )

    animate(
      rotZ,
      currentProject === index ? 0 : -0.1 * Math.PI,
      { type: "spring", stiffness: 120, damping: 18 }
    )

    }, [currentProject, index, x, y, z, rotX, rotZ])

  useFrame(() => {
    if (!ref.current) return
    ref.current.position.set(x.get(), y.get(), z.get())
    ref.current.rotation.set(
      rotX.get(),
      0,
      rotZ.get()
    )
  })

  return (
    <group ref={ref}>
      <Project project={project} highlighted={index === currentProject} />
    </group>
  )
}
export const Projects = () => {

  const { viewport } = useThree()
  const [ currentProject ] = useAtom(currentProjectAtom)

  return (
    <group
      position-y={-viewport.height * 2 + 1}
    >
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          project={project}
          index={index}
          currentProject={currentProject}
        />
      ))}
    </group>
  )
}
