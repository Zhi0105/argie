import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { CanvasLoader } from "./CanvasLoader"
import { useMediaQuery } from "@_src/Components/Hooks/useMediaQuery"

export const ComputerCanvas = () => {
  const isSmall = useMediaQuery("(max-width: 640px)")
  const isTablet = useMediaQuery("(max-width: 1024px)")
  const isLarge = useMediaQuery("(min-width: 1440px)")

  const Computers = () => {
    const { scene } = useGLTF('/assets/models/desktop.glb', true)

    const getScale = () => {
      if (isSmall) return 1.7
      if (isTablet) return 1.2
      if (isLarge) return 0.8
      return 1.0
    }

    return (
      <mesh>
        <hemisphereLight intensity={1.8} groundColor="black" />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1.2}
          castShadow
        />
        <primitive
          object={scene}
          scale={getScale()}
          position={[0, -2, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    )
  }

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [25, 3, 8], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 2.4}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
