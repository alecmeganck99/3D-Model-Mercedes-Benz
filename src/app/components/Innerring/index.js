import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Convert } from "../../utils";

import Innerring from "./Innerring.glb";

export default () => {
  const InnerringRef = useRef();
  const gltf = useGLTF(Innerring, true);

  return (
    <group rotation={[Convert.toRadians(90), 0, 0]}>
      <mesh>
        <primitive ref={InnerringRef} object={gltf.scene} />
      </mesh>
    </group>
  );
};
