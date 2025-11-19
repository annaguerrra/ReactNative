import { router } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View } from "react-native";

export default function Homepage(){
    
    return(
        <View style={styles.container}>
            <Text style={styles.header}>
               Welcome Back!
            </Text>
       </View>
    );
}

const styles = StyleSheet.create({
        container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#191313",
    },
        header:{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 150,

            color: "#bbb",
            fontWeight: "bold",
            fontSize: 32
        }
})