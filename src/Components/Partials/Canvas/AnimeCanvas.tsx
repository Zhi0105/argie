import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { CanvasLoader } from "./CanvasLoader"

export const AnimeCanvas = () => {

  const Animes = () => {
    const anime = useGLTF('/assets/models/ff.glb', true)
    return (
      <mesh>
        <primitive 
          object={anime.scene}
          scale={0.7} 
          position={[ 0, -2, 1 ]}
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
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Animes />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
