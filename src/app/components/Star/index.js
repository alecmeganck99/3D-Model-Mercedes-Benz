import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";
import { Convert } from "../../utils";

import Star from "./Star.glb";

export default () => {
  const StarRef = useRef();
  const gltf = useGLTF(Star, true);

  useFrame(() => {
    StarRef.current.rotation.z += 0.05;
  });

  return (
    <group rotation={[Convert.toRadians(90), 0, 0]}>
      <mesh>
        <primitive ref={StarRef} object={gltf.scene} />
      </mesh>
    </group>
  );
};
