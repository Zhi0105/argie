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
  {
    title: "Wawatmos",
    url: "https://r3f-wawatmos-final.vercel.app/",
    image: "assets/projects/wawatmos.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, beatae.",
  },
  {
    title: "Portfolio Baking",
    url: "https://www.youtube.com/watch?v=YkHqpqJgLKw",
    image: "assets/projects/baking.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Consequatur debitis",
  },
  {
    title: "3D Avatar",
    url: "https://www.youtube.com/watch?v=pGMKIyALcK0",
    image: "assets/projects/avatar.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, similique!",
  },
  {
    title: "Kanagame",
    url: "https://www.youtube.com/watch?v=zwNF1-lsia8",
    image: "assets/projects/kanagame.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, vel.",
  },
  {
    title: "Loader",
    url: "https://www.youtube.com/watch?v=L12wIvuZTOY",
    image: "assets/projects/loader.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, culpa.",
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
