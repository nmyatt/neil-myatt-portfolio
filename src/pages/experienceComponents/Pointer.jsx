import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { RigidBody, CapsuleCollider } from '@react-three/rapier'

const Pointer = ({ vec = new THREE.Vector3() }) => {

    const puck = useRef()

    useFrame(({ pointer, viewport }) => {
      const { width, height } = viewport.getCurrentViewport()
      vec.set(pointer.x * (width / 2), pointer.y * (height / 2), 0.3)
      if (puck.current) {
        puck.current.setNextKinematicTranslation(vec)
      }
    })
    return (      
      <RigidBody type="kinematicPosition" colliders={false} ref={puck}>
        <group rotation-x={Math.PI * 0.5}>
          <CapsuleCollider args={[3, 0.1]} type="dynamic" />
            <mesh>
              <sphereGeometry args={[0.05, 32, 32]} />
              <meshNormalMaterial transparent opacity={0.7} />
            </mesh>
        </group>
      </RigidBody>      
    )
  }

  export default Pointer;