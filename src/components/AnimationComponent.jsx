import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

function AnimationComponent() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [boxScale, setBoxScale] = useState(1);

  const animationProps = useSpring({
    scale: isAnimating ? [2, 2, 2] : [1, 1, 1],
    onRest: () => {
      if (isAnimating) {
        // Animation is complete, update the state variable
        setBoxScale(2);
        setIsAnimating(false);
      }
    },
  });

  const startAnimation = () => {
    setIsAnimating(true);
  };

  useEffect(() => {
    if (isAnimating) {
      animationProps.start({ scale: [2, 2, 2] });
    }
  }, [isAnimating, animationProps]);

  return (
    <div>
      <button onClick={startAnimation}>Start Animation</button>
      <p>Box Scale: {boxScale}</p>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <animated.mesh scale={animationProps.scale}>
          <boxGeometry attach="geometry" args={[1, 1, 1]} />
          <meshPhongMaterial attach="material" color="blue" />
        </animated.mesh>
      </Canvas>
    </div>
  );
}

export default AnimationComponent;
