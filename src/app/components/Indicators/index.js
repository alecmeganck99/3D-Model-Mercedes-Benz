import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Convert } from "../../utils";

import Indicators from "./Indicators.glb";

export default () => {
  const IndicatorsRef = useRef();
  const gltf = useGLTF(Indicators, true);

  return (
    <group rotation={[Convert.toRadians(90), 0, 0]}>
      <mesh>
        <primitive ref={IndicatorsRef} object={gltf.scene} />
      </mesh>
    </group>
  );
};
