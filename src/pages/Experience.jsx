import { Suspense, memo } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrthographicCamera } from '@react-three/drei'
import * as THREE from 'three'
import { Perf } from 'r3f-perf'

import Loading from './Loading'
import WaterColourExperience from './experienceComponents/WaterColourExperience'

// import { Leva } from 'leva'

const Experience = memo(() => {

    return (
        <Suspense fallback={<Loading />}>

            <div id="experience" className="absolute w-full h-full">
                <Canvas
                    //linear={false}
                    frameloop="demand"
                    className="cursor-pointer pt-8"
                    dpr={[1, 1.5]} 
                    gl={ {
                        antialias: true,
                        toneMapping: THREE.ACESFilmicToneMapping,
                        outputColorSpace: THREE.SRGBColorSpace
                    } }
                >

                <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={10} />
                {/* <Perf position="top-left" /> */}
                        
                <ambientLight intensity={1.5} />
                    <WaterColourExperience />        
                </Canvas>
            </div>
        </Suspense>
    )
})

export default Experience

