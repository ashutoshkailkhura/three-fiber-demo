import React from "react";
import { useLoader } from "@react-three/fiber/native";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import object from "./demo.obj";

export default function Scene() {
  const obj = useLoader(OBJLoader, object);
  return <primitive object={obj} />;
}
