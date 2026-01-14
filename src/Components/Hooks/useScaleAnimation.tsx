/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import * as THREE from 'three'
import { animate } from "motion"

export const useScaleAnimation = <T extends THREE.Object3D>(
  ref: React.RefObject<T>,
  scale: number,
  deps: any[]
) => {
  useEffect(() => {
    if (!ref.current) return

    const controls = animate(
      ref.current.scale,
      { x: scale, y: scale, z: scale },
      { duration: 0.6, ease: "easeInOut" }
    )

    return () => controls.stop()
  }, [deps, ref, scale])
}
export const usePositionYAnimation = <T extends THREE.Object3D> (
  ref: React.RefObject<T>,
  y: number,
  deps: React.DependencyList,
  options?: { duration?: number; ease?: string }
) => {
  useEffect(() => {
    const obj = ref.current
    if (!obj) return

    const controls = animate(
      obj.position,
      { y },
      {
        duration: options?.duration ?? 0.5,
        ease: "easeOut",
      }
    )

    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
