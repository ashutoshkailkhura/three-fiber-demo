import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { useFrame, useLoader } from "@react-three/fiber/native";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";

import cat from "./cat.obj";
import catT from "./cat.jpg";

export default function Cat() {
  // const colorMap = useLoader(TextureLoader, catT);
  useFrame(({ scene }) => {
    const box = scene.getObjectByName("box");
    // box.rotation.x += 0.01;
    // box.rotation.y += 0.01;
    box.rotation.z += 0.01;
  });
  const obj = useLoader(OBJLoader, cat);
  return <primitive name="box" object={obj} />;
}
