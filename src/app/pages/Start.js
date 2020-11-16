import React, { Suspense } from "react";
// import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { Lighting, StartInterface, Outerring, Star } from "../components";

function Start() {
  return (
    <group shadowMap>
      {true && <OrbitControls />}
      {true && <Lighting />}
      <Suspense fallback={null}>
        {true && <Outerring />}
        {true && <Star />}
        {true && <StartInterface />}
      </Suspense>
    </group>
  );
};

export default Start;
