import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { CanvasLoader } from "./CanvasLoader"
import { useEffect, useState } from "react"

export const ComputerCanvas = () => {

  const Computers = () => {
    const computer = useGLTF('/assets/models/desktop.glb', true)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener('resize', updateScreenWidth);  
      return () => {
        window.removeEventListener('resize', updateScreenWidth);
      };
    }, []);


    const handleModelScaleValue = ():number => {
      if(screenWidth > 1367 && screenWidth < 1600) {
        return 0.6
      }
      if(screenWidth > 1099 && screenWidth < 1366) {
        return 0.7
      }
      if(screenWidth > 400 && screenWidth < 1099) {
        return 2
      }
      if(screenWidth < 399) {
        return 1.6
      }
      return 0.9
    }

  
    return (
      <mesh>
        <hemisphereLight 
          intensity={2.15}
          groundColor={"black"} 
        />
        <pointLight intensity={1} />
        <spotLight 
          position={[ -20, 60, 10 ]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive 
          object={computer.scene}
          scale={handleModelScaleValue()} 
          position={[ 0, -2.25, -1.5 ]}
          rotation={[ -0.01, -0.2,-0.1 ]}
        />
      </mesh>
    )
  }

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [35, 4, 10], fov: 35, zoom: 1.3, near: 1, far: 1000 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.3}
          minPolarAngle={Math.PI / 2.3}
          
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
