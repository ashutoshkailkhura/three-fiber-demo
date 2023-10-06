import React, { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber/native";
import { OrbitControls } from "@react-three/drei";
import Duck from "./duck/Duck";
import Box from "./src/box";
import Gun from "./gun/Gun";
import { Model } from "./Animation/Model";
import { Environment } from "@react-three/drei/native";
import { NewModel } from "./Animation/NewModel";
import Cat from "./cat/cat";
import Home from "./home/home";
import { StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const END_POSITION = 200;

// function Foo() {
//   const { size } = useThree();
//   console.log("size: " + JSON.stringify(size));
// }

// function onPointerMissed(e) {
//   console.log("the event is on onPointerMissed");
//   console.log(e);
// }

export default function App() {
  // const onLeft = useSharedValue(true);
  // const position = useSharedValue(0);

  // const panGesture = Gesture.Pan()
  //   .onUpdate((e) => {
  //     if (onLeft.value) {
  //       position.value = e.translationX;
  //     } else {
  //       position.value = END_POSITION + e.translationX;
  //     }
  //   })
  //   .onEnd((e) => {
  //     if (position.value > END_POSITION / 2) {
  //       position.value = withTiming(END_POSITION, { duration: 100 });
  //       onLeft.value = false;
  //     } else {
  //       position.value = withTiming(0, { duration: 100 });
  //       onLeft.value = true;
  //     }
  //   });

  // const animatedStyle = useAnimatedStyle(() => ({
  //   transform: [{ translateX: position.value }],
  // }));

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight
        intensity={2}
        color={"white"}
        castShadow={true}
        position={[1, 1, 1]}
      />
      {/* <OrbitControls enableDamping enablePan enableRotate enableZoom /> */}
      <Suspense fallback={<Box position={[0, 0, 0]} />}>
        <Gun position={[0, 0, 0]} />
        {/* <Duck position={[0, 0, 0]} /> */}
        {/* <NewModel position={[0, 0, 0]} /> */}
        {/* <Model position={[0, -3, 0]} /> */}
        {/* <Environment preset="city" background blur={1} /> */}
        {/* <Foo position={[0, 0, 0]} /> */}
        {/* <Scene /> */}
        {/* <Home position={[0, 0, 0]} /> */}
        {/* Couldn't load texture blob:a5a0f3a6 */}
        {/* <Cat position={[0, 0, 0]} /> */}
      </Suspense>
    </Canvas>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 120,
    width: 120,
    backgroundColor: "#b58df1",
    borderRadius: 20,
    marginBottom: 30,
  },
});

/* 
--legacy-peer-deps
*/
