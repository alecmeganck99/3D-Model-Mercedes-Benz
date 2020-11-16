import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import { Start, Dashboard } from "./pages";

import "./styles.css";

function App() {
  const [startInterface, setStart] = useState(true);
  const [dashboard, setInterface] = useState(false);

  return (
    <Canvas>
      { startInterface && <group onClick={() => {
        setStart(!startInterface);
        setInterface(!dashboard);
      }
      }>
        <Start />
      </group>}
      { dashboard && <group>
        <Dashboard />
      </group>}
    </Canvas>
  );
}

export default App;
