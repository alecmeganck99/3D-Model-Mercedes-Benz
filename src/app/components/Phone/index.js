import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Convert } from "../../utils";

import Phone from "./Phone.glb";

export default () => {
  const PhoneRef = useRef();
  const gltf = useGLTF(Phone, true);

  return (
    <group rotation={[Convert.toRadians(90), 0, 0]}>
      <mesh>
        <primitive ref={PhoneRef} object={gltf.scene} />
      </mesh>
    </group>
  );
};
