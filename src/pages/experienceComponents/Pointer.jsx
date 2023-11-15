import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Trail } from '@react-three/drei'
import { RigidBody, CylinderCollider } from '@react-three/rapier'

const Pointer = ({ vec = new THREE.Vector3() }) => {
    const ref = useRef()
    useFrame(({ pointer, viewport }) => {
      const { width, height } = viewport.getCurrentViewport()
      vec.set(pointer.x * (width / 2), pointer.y * (height / 2), 0)
      if (ref.current) {
        ref.current.setNextKinematicTranslation(vec)
      }
    })
    return (
      <Trail
        position={[0, 0, -10]} // Start position
        width={0.5} // Width of the line
        color={'#ccdddd'} // Color of the line
        length={6} // Length of the line
        decay={2} // How fast the line fades away
        local={false} // Wether to use the target's world or local positions
        stride={0} // Min distance between previous and current point
        interval={1} // Number of frames to wait before next calculation
        target={undefined} // Optional target. This object will produce the trail.
        attenuation={(width) => width * 0.8} // A function to define the width in each point along it.
      >
        <RigidBody type="kinematicPosition" colliders={false} ref={ref}>
          <group rotation-x={Math.PI * 0.5}>
            <CylinderCollider args={[0.05, 0.2]} type="dynamic" />
          </group>
        </RigidBody>
      </Trail>
    )
  }

  export default Pointer;