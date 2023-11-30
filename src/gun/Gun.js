import React, { Suspense, useRef } from "react";
import { Reflector, useGLTF, useTexture } from "@react-three/drei/native";
import gun from "./gun.glb";
import { Canvas, useFrame } from "@react-three/fiber/native";
import Box from "../box";

const GunModel = (props) => {
  const { nodes, materials } = useGLTF(gun);
  const ref = useRef(false);
  useFrame(({ gl, scene, camera, clock }) => {
    const gun = scene.getObjectByName("gun");
    if (ref.current) {
      gun.rotation.y += 0.01;
    }
  });

  return (
    <group {...props} ref={ref} dispose={null} name="gun" scale={1.5}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Armor_1}
        position={[0, 0.544, -0.839]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.Armor_1}
        position={[0, 0.554, -0.241]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.Armor_1}
        position={[0, 0.449, -0.76]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.Armor_1}
        position={[0, 0.442, -0.337]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.Armor_1}
        position={[-0.003, 0.513, -0.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials.Armor_1}
        position={[0, 0.502, 0.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials.Armor_1}
        position={[0, 0.551, 0.182]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials.Armor_1}
        position={[0.001, 0.4, 0.183]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials.Armor_1}
        position={[0, 0.406, 0.412]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials.Armor_1}
        position={[0, 0.3, 0.613]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.Armor_1}
        position={[0.002, 0.336, 0.449]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials.Armor_1}
        position={[0, 0.347, 0.959]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials.Armor_1}
        position={[0, 0.388, 0.748]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials.Armor_1}
        position={[0, 0.337, 0.776]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials.Armor_1}
        position={[0, 0.307, 1.082]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials.Armor_1}
        position={[0, 0.283, 1.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.Armor_1}
        position={[0.003, 0.348, 0.487]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials.Armor_1}
        position={[0, 0.533, 0.573]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials.Armor_1}
        position={[0.001, 0.731, -0.523]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.Armor_1}
        position={[0, 0.257, 0.804]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials.Armor_1}
        position={[0, 0.482, -0.528]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials.Armor_1}
        position={[0.001, 0.646, -0.523]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={materials.Armor_1}
        position={[0.001, 0.679, -0.523]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials.Armor_1}
        position={[0.001, 0.605, -0.522]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials.Armor_1}
        position={[0, 0.426, -0.245]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials.Armor_1}
        position={[-0.002, 0.339, 0.669]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials.Armor_1}
        position={[-0.001, 0.588, 0.597]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={nodes.Cube011.material}
        position={[-0.001, 0.369, 0.962]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials.Armor_1}
        position={[-0.001, 0.223, 0.812]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.Armor_1}
        position={[0, 0.285, 0.802]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials.Armor_1}
        position={[0, 0.179, 1.133]}
      />
    </group>
  );
};

useGLTF.preload(gun);

export default function Gun() {
  return (
    <Canvas
      style={{ flex: 1 }}
      concurrent
      gl={{ alpha: false }}
      pixelRatio={[1, 1.5]}
      camera={{
        position: [70, 25, 30],
        fov: 5, // camera position near or far
      }}
    >
      <color attach="background" args={["white"]} />
      <ambientLight intensity={1} />
      <directionalLight
        intensity={1}
        color={"grey"}
        castShadow={false}
        position={[1, 1, 1]}
      />
      <Suspense fallback={<Box position={[0, 0, 0]} />}>
        <group position={[0, 0, 0]}>
          <GunModel />
        </group>
      </Suspense>
    </Canvas>
  );
}
