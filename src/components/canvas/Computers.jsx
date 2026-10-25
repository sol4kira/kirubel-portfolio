import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { desk_background } from "../../assets";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -2.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // On small mobile screens, render a lightweight preview image.
  // This bypasses the 10.5 MB GLTF download, eliminates loader delays,
  // and allows natural vertical touch scrolling without OrbitControls interference.
  if (isMobile) {
    return (
      <div className="absolute inset-0 w-full h-full pointer-events-none touch-pan-y overflow-hidden z-0">
        {/* Dark gradient overlay ensures hero text and buttons remain crisp and readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#050816]/75 to-transparent z-[1]" />

        {/* Clean 3D desk render positioned in the lower section of hero */}
        <div className="w-full h-full flex items-end justify-center pb-28 px-4 z-0">
          <img
            src={desk_background}
            alt=""
            aria-hidden="true"
            className="w-full max-w-[500px] object-contain drop-shadow-[0_20px_40px_rgba(145,94,255,0.2)] select-none pointer-events-none"
          />
        </div>
      </div>
    );
  }

  // On desktop screens, render the full interactive 3D model
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
