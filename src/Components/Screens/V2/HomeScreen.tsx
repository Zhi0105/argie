import React, { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Scroll, ScrollControls } from "@react-three/drei"
import { Interface } from "@_src/Components/Pages/V2/Interface/Interface"
import { Home } from "@_src/Components/Pages/V2/Home"
import { Menu } from "@_src/Components/Pages/V2/Menu"
import { ScrollManager } from "@_src/Components/Pages/V2/Interface/ScrollManager"
import { MotionConfig } from "framer-motion"
import { Leva } from "leva"
import { frameMotionConfig } from "@_src/Components/Pages/V2/Config"
import { Cursor } from "@_src/Components/Pages/V2/Cursor"
import { LoadingScreen } from "@_src/Components/Pages/V2/LoadingScreen"

export const HomeScreenV2 = () => {
    const [section , setSection] = useState(0)
    const [started, setStarted ] = useState(false)
    const [menuOpened, setMenuOpened] = useState(false)

    useEffect(() => {
        setMenuOpened(false)
    }, [section])

    return (
        <React.Fragment>
            <LoadingScreen started={started} setStarted={setStarted} />
            <MotionConfig
                transition={{
                    ...frameMotionConfig
                }}
            >
                <Canvas  shadows camera={{ position: [0, 3, 10], fov: 42 }} dpr={[1, 2]} gl={{ antialias: true, powerPreference: 'high-performance', }}> 
                    <color attach="background" args={["#e6e7ff"]} />
                    <ScrollControls pages={4} damping={0.1}>
                        <ScrollManager section={section} onSectionChange={setSection} />
                        <Scroll>
                            <Suspense>
                                {started && (
                                    <Home section={section} menuOpened={menuOpened} />
                                )}
                            </Suspense>
                        </Scroll>
                        <Scroll html>
                            {started && <Interface setSection={setSection} />}
                        </Scroll>
                    </ScrollControls>
                </Canvas>
                <Menu 
                    onSectionChange={setSection} 
                    menuOpened={menuOpened} 
                    setMenuOpened={setMenuOpened} 
                />
                <Cursor />
            </MotionConfig>
            <Leva hidden/>
        </React.Fragment>
    )
}
