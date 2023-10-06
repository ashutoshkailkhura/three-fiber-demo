import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/HomeScreen";
import Duck from "./src/duck/Duck";
import Gun from "./src/gun/Gun";
import Box from "./src/box";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Box" component={Box} />
        <Stack.Screen name="Duck" component={Duck} />
        <Stack.Screen name="Gun" component={Gun} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* 
--legacy-peer-deps
*/
