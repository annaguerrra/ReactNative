import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, Image, View } from "react-native";

export default function HomeScreen() {
  const [text, setText] = useState("")

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center",}}>
        <Image 
          style={styles.image}
          source={require("../assets/images/gatinho.jpeg")}/>
        <View style={styles.square}>
          <Text style={styles.colorBlue}>Hello, World!</Text>
          <TextInput 
            placeholder="Type here..."
            style={{color:"white"}}
            onChangeText={text => setText(text)}/> {/* input box */}
          
          <TouchableOpacity>
            <View>
              <Text>oiiiiii</Text>
            </View>
          </TouchableOpacity>
          
          <Button
            title="Press me"
            onPress={() => console.log("Hello!")}></Button>


            
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
      },
  image:{
    width: 300,
    height: 300,
    margin: 10,
    alignItems: "flex-end"
  }
})


// drawing a blue square
// const styles2 = StyleSheet.create({
//   square:{
//     color: "blue",
//     height: 300,
//     width: 300,
//     backgroundColor: "blue"
//   }
// })