import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
      <View>
        <Text style={styles.colorBlue}>Hello, World!</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  colorBlue:{
    color: "blue",
    fontSize: 12
  }
})