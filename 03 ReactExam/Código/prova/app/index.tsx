import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View, Alert } from "react-native";

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.hearder}>
          <View style={styles.hearderBorder}>
            <Text style={styles.headerCenter}>Studying</Text>
          </View> 
          
          <View style={{justifyContent: "flex-end", alignItems: "flex-end",  marginLeft: 10, marginBottom: 8}}>
            <Image 
              style={styles.imageUser}
              source={require("../assets/user.png")}/>
          </View>
      </View>
    <Text style={styles.subtitle}>Song name</Text>
       <Image 
          style={styles.image}
          source={require("../assets/lofi1.jpg")}/>
      
      <Text style={styles.Timer}>01:56:03</Text>
      <Image 
          style={styles.imageTimer}
          source={require("../assets/foto.png")}/>
    </View>
  );
}

const styles  = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    backgroundColor: "#dec7b1"
  },
  hearder:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    gap: 45
  },
  hearderBorder:{
    width: 150,
    height: 45,
    backgroundColor: "#ffbcb0",
    borderWidth: 2,
    borderColor: "#b02810",
    padding: 15,
    borderRadius: 50,
    marginBottom: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  imageUser:{
    width: 60,
    height:60,
  },
  headerCenter:{
    color: "#b02810",
    fontFamily: "San Francisco",
    fontWeight: "600",
    fontSize: 20,
  },
  subtitle:{
    color: "#1d2637",
    fontFamily: "Verdana",
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 20
  },
  image:{
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height:250,
    borderRadius: 18
  },
  Timer:{
    color: "#1d2637",
    fontFamily: "courier",
    fontWeight: "600",
    fontSize: 60,
    marginTop: 35,
    marginBottom: 10
  },
  imageTimer:{
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height:100,
    borderRadius: 18
  },
});
