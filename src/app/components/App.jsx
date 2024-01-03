"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Center,
  useGLTF,
  Environment,
  AccumulativeShadows,
  RandomizedLight,
} from "@react-three/drei";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Canvas component with SSR disabled
const DynamicCanvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
);

export const App = ({ position = [-5, 2, 5], fov = 25 }) => {
  const [color1, setColor1] = useState("#404040"); // Default color for the first part
  const [color2, setColor2] = useState("#fee190"); // Default color for the second part
  const [eventSource, setEventSource] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set eventSource when the component mounts and is on the client side
      setEventSource(document.getElementById("root"));
    }
  }, []);

  return (
    <div>
      <div className="relative w-full h-screen">
        <DynamicCanvas
          shadows
          eventSource={eventSource}
          eventPrefix="client"
          camera={{ position, fov }}
        >
          <ambientLight intensity={0.5} />
          <Environment preset="city" />
          <Center>
            <Bench color1={color1} color2={color2} />
            <Backdrop />
          </Center>
          <OrbitControls />
        </DynamicCanvas>
      </div>
      <div className="absolute bottom-20 left-20 z-10 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg flex flex-col space-y-10">
        <div className="flex flex-col ">
          <label className="text-3xl font-black">
            Tasblock Color Configurator
          </label>
          <label className="text-xs italic">Alpha Ver/Dec 2023</label>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col">
            <label className="font-bold text-xl">
              Tasblock Bench with Separator
            </label>
            <label className="text-s italic">TAS BK01.2-150-S</label>
          </div>
          <div className="flex space-x-2">
            <label>Legs Color: </label>
            <input
              type="color"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
            />
            <label>Planks Color: </label>
            <input
              type="color"
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function Bench({ color1, color2 }) {
  const { nodes } = useGLTF("/BK01Sep.glb");
  return (
    <group dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.BK01_Leg003.geometry}>
        <meshStandardMaterial
          attach="material"
          color={color1}
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.BK01_Leg003_1.geometry}>
        <meshStandardMaterial attach="material" color={color2} />
      </mesh>
    </group>
  );
}

function Backdrop() {
  return (
    <AccumulativeShadows temporal frames={60} alphaTest={0.1} scale={(0, 5)}>
      <RandomizedLight
        amount={4}
        radius={12}
        intensity={0.55}
        ambient={0.25}
        position={[-5, 5, 8]}
      />
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.25}
        ambient={0.25}
        position={[5, 1, -8]}
      />
    </AccumulativeShadows>
  );
}

useGLTF.preload("/BK01Sep.glb");
