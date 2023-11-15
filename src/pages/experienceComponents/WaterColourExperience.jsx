import { MarchingCubes, MeshTransmissionMaterial, Environment, Bounds, useTexture } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import MetaBall from './MetaBall'
import Pointer from './Pointer'
import HeroText from './HeroText'
import AnimatedPencils from './AnimatedPencils'

import paintPaper from '../../assets/paint-paper.jpg'
import mugShot from '../../assets/mugshot.jpg'
import env from '../../assets/artist_workshop_1k.hdr'

const Experience = () => {

  const PI = Math.PI
  const dimensions = [2.1,2.1]

  return (
    <>
      <mesh position={[0,0,-8]} receiveShadow>
        <planeGeometry args={dimensions} />
        <meshStandardMaterial map={useTexture(paintPaper)} />        
      </mesh>

      <Physics gravity={[0, 0, 0]} debug={false} >
        <MarchingCubes resolution={80} maxPolyCount={20000} enableUvs={false} enableColors>
          <MeshTransmissionMaterial
            vertexColors
            transmissionSampler
            transmission={0.95}
            thickness={0.02}
            roughness={0}
            chromaticAberration={0.1}
            anisotropy={0.1}
            envMapIntensity={0.2}
            distortion={0.5}
            distortionScale={0.1}
            temporalDistortion={0.1}
            iridescence={0.1}
            iridescenceIOR={0.2}
            iridescenceThicknessRange={[500, 1400]}
            toneMapped={true}
          />          
            <MetaBall color="tomato" position={[0, 0, 0]} />
            <MetaBall color="yellow" position={[0, 0, 0]} />
            <MetaBall color="lightgreen" position={[0, 0, 0]} />
            <MetaBall color="royalblue" position={[0, 0, 0]} />
            <MetaBall color="aqua" position={[0, 0, 0]} />
            <MetaBall color="violet" position={[0, 0, 0]} />
          <Pointer />
        </MarchingCubes>
      </Physics>
      <Environment files={env} />
      {/* Zoom to fit a 1/1/1 box to match the marching cubes */}
      <Bounds observe fit clip margin={1}>
        <mesh visible={false}>
          <boxGeometry args={[1,1,1]} />
          <meshBasicMaterial wireframe color="red" />
        </mesh>        
      </Bounds>
      <group position={[0.25,0.32,-7]} scale={0.45}>
        <mesh rotation-z={Math.PI * -0.03}>        
          <planeGeometry args={[0.7, 1]} widthSegments={100} heightSegments={100} />
          <meshStandardMaterial 
            map={useTexture(mugShot)}
          />          
        </mesh>        
        <mesh position={[0.005,-0.005,-1]} rotation-z={PI * -0.028}>        
          <boxGeometry args={[0.66, 1, 0.1]} />
          <meshBasicMaterial color="#e0e0e9" />
        </mesh>
      </group>      
      
      <HeroText position={[0,0,-6]} />   
      
      <AnimatedPencils />
      
    </>
  )
}

// useTexture.preload(mugShot)
// useTexture.preload(paintPaper)

export default Experience
