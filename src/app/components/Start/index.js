import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Convert } from "../../utils";

import Start from "./Startscreen.glb";

export default () => {
  const StartRef = useRef();
  const gltf = useGLTF(Start, true);

  return (
    <group rotation={[Convert.toRadians(90), 0, 0]}>
      <mesh>
        <primitive ref={StartRef} object={gltf.scene} />
      </mesh>
    </group>
  );
};
