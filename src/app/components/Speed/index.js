import React, { useRef, useEffect } from "react";
import { Text } from 'drei';

export default () => {
  const SpeedRef = useRef();
  let speed = 0;
  let topspeed = 340;

  useEffect(() => {
    setInterval(() => {
      if (speed <= topspeed) {
        SpeedRef.current.text = speed++;
      }
      else if (speed == topspeed + 1) {
        speed = 1;
      }
    }, 200)
  }, [])

  return (
    <group>
      <mesh position={[0, -0.8, 0]}>
        <Text ref={SpeedRef} color="#FFF" fontSize="0.5"></Text>
      </mesh>
    </group>
  );
};
