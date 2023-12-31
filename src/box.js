import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber/native";

export default function Box(props) {
  const BoxModel = (props) => {
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    useFrame(({ scene }) => {
      const box = scene.getObjectByName("box");
      box.rotation.x += 0.01;
      box.rotation.y += 0.01;
      box.rotation.z += 0.01;
    });
    return (
      <mesh
        name="box"
        {...props}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "tomato"} />
      </mesh>
    );
  };

  return (
    <Canvas style={{ flex: 1 }}>
      <ambientLight intensity={2} />
      <directionalLight
        intensity={1}
        color={"pink"}
        castShadow={false}
        position={[1, 1, 1]}
      />
      <BoxModel position={[0, 0, 0]} />
    </Canvas>
  );
}
