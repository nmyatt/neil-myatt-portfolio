import { useState } from "react";
import { useSpring, config, animated } from "@react-spring/three";
import Pencil from "./Pencil";

const AnimatedPencils = () => {

    const PI = Math.PI
    const [ animActive, setAnimActive ] = useState(false)

    const {
        pencil1Position,
        pencil1Rotation,
        pencil2Position,
        pencil2Rotation,
        pencil3Position,
        pencil3Rotation,
      } = useSpring({
        from: {
          pencil1Position: [0.04,-0.32,0.12],
          pencil1Rotation: [0,0,PI*0.01],
          pencil2Position: [-0.1,-0.34,0.1],
          pencil2Rotation: [0,0,PI*0.81],
          pencil3Position: [0,-0.27,0.1],
          pencil3Rotation: [0,0,PI*0.91]
        },
        to: [{
          pencil1Position: [0.035,-0.31,0.12],
          pencil1Rotation: [0,0,0]
        },{
          pencil1Position: [0.04,-0.32,0.12],
          pencil1Rotation: [0,0,PI*0.01]
        }],
        config: {
          mass: 10,
          tension: 100,
          friction: 5
        },
        loop: true,
        pause: animActive
      })

    return (
        <group position={[0,0,0]} onClick={(e) => setAnimActive(!animActive)}>
            <animated.group position={pencil1Position} rotation={pencil1Rotation} >
              <Pencil color="#330099" />
            </animated.group>
            <animated.group position={pencil2Position} rotation={pencil2Rotation} >
              <Pencil color="#dd8833" />
            </animated.group>
            <animated.group position={pencil3Position} rotation={pencil3Rotation} >                
              <Pencil color="#992277" />
            </animated.group>
        </group>
       
    )
}

export default AnimatedPencils