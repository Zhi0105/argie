/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sphere, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import * as THREE from "three"
import gsap from "gsap"

type ColorState = {
  color: string
}

export const Background: React.FC = () => {
  const material = useRef<THREE.MeshBasicMaterial | null>(null)

  // since GSAP mutates this object, keep it as a ref
  const color = useRef<ColorState>({ color: "#b9bcff" })

  const data = useScroll()
  const tl = useRef<null | any>(null)

  useFrame(() => {
    // guard: refs might be null during initial frames
    if (!tl.current || !material.current) return

    tl.current.progress(data.offset)
    material.current.color.set(color.current.color) // avoids creating new Color every frame
  })

  useEffect(() => {
    const timeline = gsap.timeline()

    timeline.to(color.current, { color: "#212121" })
    timeline.to(color.current, { color: "#7a7ca5" })
    timeline.to(color.current, { color: "#9b96dd" })

    tl.current = timeline

    return () => {
      timeline.kill()
      tl.current = null
    }
  }, [])

  return (
    <group>
      <Sphere scale={[30, 30, 30]}>
        <meshBasicMaterial
          ref={material}
          side={THREE.BackSide}
          toneMapped={false}
        />
      </Sphere>
    </group>
  )
}
