import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { CanvasLoader } from "./CanvasLoader"

export const PlanetCanvas = () => {

  const Planets = () => {
    const planet = useGLTF('/assets/models/planet.glb', true)
    return (
      <mesh>
        <primitive 
          object={planet.scene}
          scale={5.4} 
          position-y={0}
          rotation-y={0}
        />
      </mesh>
    )
  }

  return (
    <Canvas
     shadows
     frameloop="demand"
     gl={{ preserveDrawingBuffer: true }}
     camera={{ fo: 45, near: 0.1, far: 200, position: [ -4, 3, 6 ] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Planets />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
