import React from "react";

export default () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <group position={[0.6, 0.6, 1]}>
        <directionalLight castShadow={true} intensity={5} />
      </group>
      <pointLight color={0xffcccc} intensity={0.5} position={[0, 0, 0]} />
    </>
  );
};
