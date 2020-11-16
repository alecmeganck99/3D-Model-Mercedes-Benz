import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Lighting, Outerring, Star, Incomingcall, Indicators, Phone, Innerring, Numbers, Speed } from "../components";

function dashboard() {
  return (
    <group shadowMap>
      {true && <OrbitControls />}
      {true && <Lighting />}
      <Suspense fallback={null}>
        {true && <Outerring />}
        {true && <Innerring />}
        {true && <Numbers />}
        {true && <Star />}
        {true && <Speed />}
        {true && <Incomingcall />}
        {true && <Indicators />}
        {true && <Phone />}
      </Suspense>
    </group>
  );
};

export default dashboard;
