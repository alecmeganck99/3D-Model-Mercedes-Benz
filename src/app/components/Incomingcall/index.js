import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Convert } from "../../utils";

import Incomingcall from "./Incomingcall.glb";

export default () => {
  const IncomingcallRef = useRef();
  const gltf = useGLTF(Incomingcall, true);

  return (
    <group rotation={[Convert.toRadians(90), 0, 0]}>
      <mesh>
        <primitive ref={IncomingcallRef} object={gltf.scene} />
      </mesh>
    </group>
  );
};
