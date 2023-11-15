import { Text } from '@react-three/drei';
import { useSpring, config, animated } from '@react-spring/three';
import { useEffect, useState } from 'react';
import Pencil from './Pencil';

const AnimatedTextCycle = ({textArray}) => {
  
  const [textIndex, setTextIndex] = useState(0) 
  const [text, setText] = useState(null)

  const [springProps, api] = useSpring(() => ({
    from: {
      rotation: [0,Math.PI*0.1,0],
      position: [0,-0.3,0],   
      scale: [0,0,0],
      color: '#444444'
    },
    to: [
      {
        rotation: [Math.PI*8,0,0],
        scale: [1,1,1],
        color: '#ff2222'
      },
      {
        color: '#22ff22'
      },
      {
        color: '#2222ff'
      },
      {
        scale: [1,1,1],
        color: '#444444'
      },
      {
        scale: [0,0,0],
        rotation: [0,Math.PI*0.1,0],
      }
    ],
    config: {      
      mass: 2,
      tension: 30,
      friction: 20
    },
    loop: true,
    onRest: () => {
      setTextIndex((textIndex + 1) % textArray.length)
    }
    
  }),[textIndex]);

  return (
      <animated.group {...springProps} >        
        <Text
            position={[0,0,0.03]}
            color="#444444"
            fontSize={0.045}
            textAlign="center"
            material-transparent={false}
            children={`"${textArray[textIndex]}"`}
          />                 
      </animated.group>
  );
}

export default AnimatedTextCycle;

