import React, { Suspense, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei/native";
import { Canvas, useFrame } from "@react-three/fiber/native";
import { useSpring, animated } from "@react-spring/three";
import duck from "./duck.glb";
import Box from "../box";

const DuckModel = (props) => {
  const { nodes, materials } = useGLTF(duck);
  const [active, setActive] = useState(false);
  const springs = useSpring({ scale: active ? 1.5 : 1 });
  const { scale } = useSpring({ scale: active ? 1.5 : 1 });
  const ref = useRef(false);

  useFrame(({ gl, scene, camera, clock }) => {
    const duck = scene.getObjectByName("duck");
    if (ref.current) {
      duck.rotation.y += 0.01;
    }
  });

  return (
    <group {...props} ref={ref} scale={0.01} dispose={null}>
      <animated.mesh
        name="duck"
        geometry={nodes.LOD3spShape.geometry}
        material={materials["blinn3-fx"]}
        rotateOnAxis={true}
        scale={scale}
        onClick={() => {
          setActive(!active);
          ref.current = !ref.current;
        }}
        ref={ref}
        castShadow
        receiveShadow
      />
    </group>
  );
};

useGLTF.preload(duck);

export default function Duck() {
  return (
    <Canvas style={{ flex: 1 }}>
      <ambientLight intensity={0.8} />
      <directionalLight
        intensity={1}
        color={"white"}
        castShadow={true}
        position={[1, 1, 1]}
      />
      <Suspense fallback={<Box position={[0, 0, 0]} />}>
        <DuckModel />
      </Suspense>
    </Canvas>
  );
}
