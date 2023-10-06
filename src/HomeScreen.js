import { StyleSheet, Button, ScrollView, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Button
          onPress={() => navigation.navigate("Box")}
          title="Box"
          color="black"
        />
        <Button
          onPress={() => navigation.navigate("Duck")}
          title="Duck"
          color="black"
        />
        <Button
          onPress={() => navigation.navigate("Gun")}
          title="Gun"
          color="black"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
  scrollView: {
    flex: 1,
  },
});
