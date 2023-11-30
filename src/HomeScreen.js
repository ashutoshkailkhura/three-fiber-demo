import { StyleSheet, ScrollView, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Pressable
          onPress={() => navigation.navigate("Box")}
          title="Box"
          style={styles.button}
        >
          <Text style={{ color: "white" }}>Box</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Duck")}
          title="Duck"
          style={styles.button}
        >
          <Text style={{ color: "white" }}>Duck</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Gun")}
          title="Gun"
          style={styles.button}
        >
          <Text style={{ color: "white" }}>Gun</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
  button: {
    padding: 22,
    borderRadius: 12,
    backgroundColor: "tomato",
    margin: 12,
  },
});
