/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import file from "./animation.glb";
import React, { useRef, useState } from "react";
import {
  useGLTF,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei/native";
import { useFrame } from "@react-three/fiber/native";
import { useSpring, animated } from "@react-spring/three";

export function Model(props) {
  const animationRef = useRef(null);
  const { nodes, materials } = useGLTF(file);
  const [active, setActive] = useState(false);
  const springs = useSpring({ scale: active ? 3 : 1 });
  const { scale } = useSpring({ scale: active ? 3 : 1 });
  // console.log("materials " + JSON.stringify(materials));
  useFrame(({ gl, scene, camera, clock }) => {
    // if (!animationRef.current) {
    //   return;
    // }
    const box = scene.getObjectByName("player");
    // animationRef.current.rotation.x += 0.01;
    box.rotation.y += 0.01;
    // animationRef.current.rotation.y += 0.01;
    // animationRef.current.rotation.z += 0.01;
  });
  return (
    <group {...props} dispose={null} ref={animationRef}>
      <animated.group
        scale={scale}
        // onClick={() => setActive(!active)}
        name="player"
        // castShadow
        receiveShadow
        // rotation={[Math.PI / 2, 0, 0]}
        onClick={(e) => {
          // e.stopPropagation();
          e.stopPropagation();
          setActive(!active);
        }}
        // onContextMenu={(e) => console.log("context menu")}
        // onDoubleClick={(e) => console.log("double click")}
        // onWheel={(e) => console.log("wheel spins")}
        // onPointerUp={(e) => console.log("up")}
        // onPointerDown={(e) => console.log("down")}
        // onPointerOver={(e) => console.log("over")}
        // onPointerOut={(e) => console.log("out")}
        // onPointerEnter={(e) => console.log("enter")} // see note 1
        // onPointerLeave={(e) => console.log("leave")} // see note 1
        // onPointerMove={(e) => console.log("move ")}
        // onPointerMissed={() => console.log("missed")}
        // onUpdate={(self) => console.log("props have been updated")}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.EyeLeft.geometry}
          material={materials[0]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.EyeRight.geometry}
          material={materials[0]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials[1]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Glasses.geometry}
          material={materials[2]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials[3]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials[4]}
        />

        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials[5]}
        >
          <directionalLight position={[0, 0, 5]} color="red" />
          <meshStandardMaterial />
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials[6]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials[7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials[8]}
        />
        <PerspectiveCamera
          makeDefault={false}
          far={100}
          near={1}
          fov={45.849}
          position={[0, 463.264, -431.078]}
          rotation={[0, 1, 10]}
          zoom={5}
        />
      </animated.group>
    </group>
  );
}

useGLTF.preload(file);