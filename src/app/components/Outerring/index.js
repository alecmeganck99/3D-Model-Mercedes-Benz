import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Convert } from "../../utils";

import Outerring from "./Outerring.glb";

export default () => {
  const OuterringRef = useRef();
  const gltf = useGLTF(Outerring, true);

  return (
    <group rotation={[Convert.toRadians(90), 0, 0]} >
      <mesh>
        <primitive ref={OuterringRef} object={gltf.scene} />
      </mesh>
    </group>
  );
};
