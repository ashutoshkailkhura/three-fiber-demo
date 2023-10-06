import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei/native";
import home from "./home.glb";
import { useFrame } from "@react-three/fiber/native";
import { useSpring, animated } from "@react-spring/three";

export default function Home(props) {
  const { nodes, materials } = useGLTF(home);
  const [active, setActive] = useState(false);
  // const { scale } = useSpring({ scale: active ? 0.05 : 0.01 });

  useFrame(({ gl, scene, camera, clock }) => {
    const home = scene.getObjectByName("home");
    // home.rotation.x += 0.01;
    // home.rotation.y += 0.01;
    // home.rotation.z += 0.01;
  });
  return (
    <group
      {...props}
      dispose={null}
      name="home"
      onClick={() => {
        setActive(!active);
      }}
    >
      <>
        <mesh
          scale={active ? 0.05 : 0.01}
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh0.geometry}
          material={materials.mat0}
        />
        <mesh
          scale={active ? 0.05 : 0.01}
          castShadow
          receiveShadow
          geometry={nodes.imagetostl_mesh1.geometry}
          material={materials.mat1}
        />
      </>
    </group>
  );
}

useGLTF.preload(home);
