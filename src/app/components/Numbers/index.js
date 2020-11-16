import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Convert } from "../../utils";

import Numbers from "./Numbers.glb";

export default () => {
  const NumbersRef = useRef();
  const gltf = useGLTF(Numbers, true);

  return (
    <group rotation={[Convert.toRadians(90), 0, 0]}>
      <mesh>
        <primitive ref={NumbersRef} object={gltf.scene} />
      </mesh>
    </group>
  );
};
