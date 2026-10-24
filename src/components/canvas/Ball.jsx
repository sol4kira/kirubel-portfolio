import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, isFocused, onAnimationComplete }) => {
  const [decal] = useTexture([imgUrl]);
  const meshRef = useRef();
  const targetRotationRef = useRef(0);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    if (isFocused) {
      // Rotate continuously around Y-axis while focused/hovered
      meshRef.current.rotation.y += delta * 2.6;
      // Target the next full 360-degree forward orientation
      targetRotationRef.current =
        Math.ceil(meshRef.current.rotation.y / (2 * Math.PI)) * (2 * Math.PI);
    } else {
      // Smoothly complete the turn back to forward-facing decal orientation
      const diff = targetRotationRef.current - meshRef.current.rotation.y;
      if (diff > 0.01) {
        meshRef.current.rotation.y += Math.min(diff, delta * 3.5);
      } else {
        meshRef.current.rotation.y = targetRotationRef.current;
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      }
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 0, 0.08]} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#FFF8EB"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    setIsAnimating(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    // isAnimating remains true until onAnimationComplete resets it
  };

  return (
    <div
      tabIndex={0}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onTouchStart={handleFocus}
      onTouchEnd={handleBlur}
      className="w-full h-full outline-none cursor-pointer select-none"
    >
      <Canvas
        frameloop={isAnimating ? "always" : "demand"}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball
            imgUrl={icon}
            isFocused={isFocused}
            onAnimationComplete={() => {
              if (!isFocused) {
                setIsAnimating(false);
              }
            }}
          />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
