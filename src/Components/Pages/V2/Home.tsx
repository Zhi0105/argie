/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react"
import { Office } from "./Partials/Office"
import { animate } from "motion"
import { Group } from "three"
import { Float, MeshDistortMaterial, useScroll } from "@react-three/drei"
import { Avatar } from "./Partials/Avatar"
import { useFrame, useThree } from "@react-three/fiber"
import { useMotionValue, animate as framerAnimate } from "framer-motion"
import { frameMotionConfig } from "./Config"
import { Projects } from "./Projects"
import { Background } from "./Background"

export const Home = (props:any) => {
    const { menuOpened } = props
    const { viewport } =useThree()
    const [ section, setSection ] = useState(0)
    const data = useScroll()

    const cameraPositionX = useMotionValue(0)
    const cameraLookAtX = useMotionValue(0)

    const officeGroupRef = useRef<Group>(null)
    const skillsGroupRef = useRef<Group>(null)
    const avatarGroupRef = useRef<Group>(null)

    const characterContainerAboutRef = useRef<Group>(null)

    const avatarTargets: Record<number, {
        pos?: { x: number; y: number; z: number }
        rot?: { x: number; y: number; z: number }
        scale?: number
        }> = {
        0: {
            scale: 0.9,
            // keep base pos/rot (so we don’t override unless needed)
        },
        1: {
            pos: { x: 0, y: -viewport.height + 0.5, z: 7 },
            rot: { x: 0, y: 0, z: 0 },
            scale: 1,
        },
        2: {
            pos: { x: -2, y: -viewport.height * 2 + 0.5, z: 0 },
            rot: { x: 0, y: Math.PI / 2, z: 0 },
            scale: 1,
        },
        3: {
            pos: { x: 0.3, y: -viewport.height * 3 + 1, z: 8.5 },
            rot: { x: 0, y: -Math.PI / 4, z: 0 },
            scale: 1,
        },
    }

    useEffect(() => {
        const group = officeGroupRef.current
        if (!group) return

        const targetY = section === 0 ? 0 : -1

        // Animate THREE.Vector3 (group.position) directly
        const controls = animate(
        group.position,
        { y: targetY },
        {
            duration: 0.6,
            ease: "easeInOut",
        }
        )

        return () => controls.stop()
    }, [section])
    useEffect(() => {
        const group = skillsGroupRef.current
        if (!group) return

        const target = {
        z: section === 1 ? 0 : -10,
        y: section === 1 ? -viewport.height : -1.5,
        }

        const controls = animate(
        group.position,
        { y: target.y, z: target.z },
        { duration: 0.8, ease: "easeInOut" }
        )

        return () => controls.stop()
    }, [section, viewport.height])

    useEffect(() => {
        const g = avatarGroupRef.current
        if (!g) return

        const basePos = { x: 1.9072935059634513, y: 0.14400000000000002, z: 2.681801948466054 }
        const baseRot = { x: -Math.PI, y: 1.2053981633974482, z: Math.PI }

        const t = avatarTargets[section] ?? avatarTargets[0]

        const targetPos = t.pos ?? basePos
        const targetRot = t.rot ?? baseRot
        const targetScale = t.scale ?? 1

        const opts = { duration: 0.6, ease: "easeInOut" as const }

        const posCtrl = animate(g.position, targetPos, opts)
        const rotCtrl = animate(g.rotation, targetRot, opts)
        const sclCtrl = animate(g.scale, { x: targetScale, y: targetScale, z: targetScale }, opts)

        return () => {
            posCtrl.stop()
            rotCtrl.stop()
            sclCtrl.stop()
        }
    }, [section, viewport.height])

    useEffect(() => {
        framerAnimate(cameraPositionX, menuOpened ? -5 : 0, { ...frameMotionConfig, type: "spring" })
        framerAnimate(cameraLookAtX, menuOpened ? 5 : 0, { ...frameMotionConfig, type: "spring" })
    }, [menuOpened, cameraPositionX, cameraLookAtX, section])


    useFrame((state) => {

        let curSection = Math.floor(data.offset * data.pages)

        if(curSection > 3) {
            curSection = 3
        }

        if(curSection !== section) {
            setSection(curSection)
        }
        
        state.camera.position.x = cameraPositionX.get()
        state.camera.lookAt(cameraLookAtX.get(), 0, 0)
        
        // const position = new THREE.Vector3()
        // characterContainerAboutRef.current?.getWorldPosition(position)

        // const quaternion = new THREE.Quaternion()
        // characterContainerAboutRef.current?.getWorldQuaternion(quaternion)
        // const euler = new THREE.Euler()
        // euler.setFromQuaternion(quaternion, "XYZ")
    })

    return (
        <>
            <Background />
            <group 
                ref={avatarGroupRef}
                position={[1.9072935059634513, 0.14400000000000002, 2.681801948466054]}
                rotation={[-3.141592653589793, 1.2053981633974482, 3.141592653589793]}
                scale={[1, 1, 1]}
            >
                <Avatar animation={section === 0 ? "Typing" : "Standing"} />
            </group>
            <ambientLight intensity={1} />
            <group
                ref={officeGroupRef}
                position={[1.5, 2, 3]}
                scale={[0.9, 0.9, 0.9]}
                rotation-y={-Math.PI / 4}
            >
                <Office section={section} />
                <group 
                    ref={characterContainerAboutRef}
                    name="CharacterSpot" 
                    position={[0.07, 0.16, -0.57]} 
                    rotation={[-Math.PI, 0.42, -Math.PI]}
                >
                    {/* <Avatar animation={section === 0 ? "Typing" : "Standing"} /> */}
                </group>
            </group>
            {/* SKILLS */}
            <group ref={skillsGroupRef} position={[ 0, -1.5, -10 ]}
            >
                <directionalLight position={[-5, 3, 5]}  intensity={0.4}/>
                <Float>
                    <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
                        <sphereGeometry />
                        <MeshDistortMaterial 
                            opacity={0.8}
                            transparent
                            distort={0.4}
                            speed={4}
                            color={"red"}
                        />
                    </mesh>
                </Float>
                <Float>
                    <mesh position={[3, 1, -18]} scale={[3, 3, 3]}>
                        <sphereGeometry />
                        <MeshDistortMaterial 
                            opacity={0.8}
                            transparent
                            distort={1}
                            speed={5}
                            color={"yellow"}
                        />
                    </mesh>
                </Float>
                <Float>
                    <mesh position={[-3, -1, -11]} scale={[1.4, 1.4, 1.4]}>
                        <boxGeometry />
                        <MeshDistortMaterial 
                            opacity={0.8}
                            transparent
                            factor={1}
                            speed={5}
                            color={"blue"}
                        />
                    </mesh>
                </Float>
            </group>
            
            {/* PROJECTS */}
            <Projects />
        </>
    )
}