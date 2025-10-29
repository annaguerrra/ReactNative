import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center",}}>
        <View style={styles.square}>
          <Text style={styles.colorBlue}>Hello, World!</Text>
        </View>
      </View>
  );
}

// setting font color to blue and then putting it inside a purple square
const styles = StyleSheet.create({
  colorBlue:{
    color: "orange",
    fontSize: 20,
  },
  square:{
        color: "blue",
        height: 300,
        width: 300,
        backgroundColor: "purple",
        borderRadius: 15
}})


// drawing a blue square
// const styles2 = StyleSheet.create({
//   square:{
//     color: "blue",
//     height: 300,
//     width: 300,
//     backgroundColor: "blue"
//   }
// })