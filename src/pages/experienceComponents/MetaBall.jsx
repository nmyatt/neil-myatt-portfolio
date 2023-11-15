import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MarchingCube } from '@react-three/drei'
import { RigidBody, BallCollider } from '@react-three/rapier'


const MetaBall = ({ color, vec = new THREE.Vector3(), ...props }) => {
  
    const api = useRef()
    useFrame((state, delta) => {
      delta = Math.min(delta, 0.1)
      if (api && api.current) {
        api.current.applyImpulse(
          vec
            .copy(api.current.translation())
            .normalize()
            .multiplyScalar(delta * -0.002),
        )
      }
    })
    return (
      <RigidBody ref={api} colliders={false} linearDamping={8} angularDamping={0.15} {...props}>
        <MarchingCube strength={0.2} subtract={6} color={color} />
        <BallCollider args={[0.04]} type="dynamic" />
      </RigidBody>
    )
  }

  export default MetaBall;