import { useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Trail } from '@react-three/drei'
import { RigidBody, CapsuleCollider } from '@react-three/rapier'

const Pointer = ({ vec = new THREE.Vector3() }) => {
  
    const materialProps = {
      thickness: 5,
      roughness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0,
      transmission: 1,
      ior: 1.25,
      envMapIntensity: 1,
      color: "#ffffff",
      attenuationTint: '#ffe79e',
      attenuationDistance: 0
    }

    const puck = useRef()
    const [touch, setTouch] = useState(false)

    const isTouching = (event) => {
      setTouch(true)
    }

    const isNotTouching = (event) => {
      setTouch(false)
    }

    useFrame(({ pointer, viewport },delta) => {
      const { width, height } = viewport.getCurrentViewport()
      vec.set(pointer.x * (width / 2), pointer.y * (height / 2), 0.3)
      if (puck.current) {
        puck.current.setNextKinematicTranslation(vec)
      }
    })
    return (      
      <RigidBody type="kinematicPosition" colliders={false} ref={puck} onPointerDown={isTouching} onPointerUp={isNotTouching}>
        <group rotation-x={Math.PI * 0.5}>
          <CapsuleCollider args={[3, 0.1]} type="dynamic" />
            <mesh>
              {/* <cylinderGeometry args={[0.05, 0.05, 0.15, 32]} /> */}
              <sphereGeometry args={[0.05, 32, 32]} />
              <meshNormalMaterial transparent opacity={0.7} />
              {/* <meshPhysicalMaterial {...materialProps} /> */}
            </mesh>
        </group>
      </RigidBody>      
    )
  }

  export default Pointer;