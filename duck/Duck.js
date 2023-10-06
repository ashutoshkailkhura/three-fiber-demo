import React, { useRef, useEffect, useState } from "react";
import {
  useGLTF,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei/native";
import duck from "./duck.glb";
import { useFrame } from "@react-three/fiber/native";
import { useSpring, animated } from "@react-spring/three";

export default function Duck(props) {
  const { nodes, materials } = useGLTF(duck);
  const [active, setActive] = useState(false);
  const springs = useSpring({ scale: active ? 1.5 : 1 });
  const { scale } = useSpring({ scale: active ? 1.5 : 1 });
  const ref = useRef(false);

  useFrame(({ gl, scene, camera, clock }) => {
    const box = scene.getObjectByName("duck");

    // box.rotation.x += 0.01;
    // box.rotation.y += 0.01;
    if (ref.current) {
      // box.rotation.x = Math.sin(clock.getElapsedTime());
      box.rotation.y += 0.01;
      // box.rotation.z = Math.sin(clock.getElapsedTime());
    }
    // box.rotation.z += 0.01;

    // box.translateX(Math.cos(12));
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
        // // onClick={(event) => setActive(!active)}
        // // ref={myMesh}

        // castShadow
        // receiveShadow

        // // onClick={(e) => console.log('click')}
        // onContextMenu={(e) => console.log("context menu")}
        // onDoubleClick={(e) => console.log("double click")}
        // onWheel={(e) => console.log("wheel spins")}
        // onPointerUp={(e) => console.log("up")}
        // onPointerDown={(e) => console.log("down")}
        // onPointerOver={(e) => {
        //   console.log("over");
        // }}
        // onPointerOut={(e) => {
        //   console.log("out");
        // }}
        // onPointerEnter={(e) => console.log("enter")}
        // onPointerLeave={(e) => console.log("leave")}
        // onPointerMove={(e) => {
        //   console.log("move ");
        //   ref.current = e.movementX;
        // }}
        // onPointerMissed={() => console.log("missed")}
        // onUpdate={(self) => console.log("props have been updated")}
      />
    </group>
  );
}

useGLTF.preload(duck);
