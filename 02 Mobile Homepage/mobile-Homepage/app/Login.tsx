import { router } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View } from "react-native";

export default function Login(){
    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#191313"}}>

            <View style={styles.LoginBorder}>
                <Text style={styles.Login}>Login</Text>

                <TextInput style={styles.loginbox} placeholder="E-mail, Login or Telephone"></TextInput>
                <TextInput style={styles.loginbox} placeholder="Password"></TextInput>

                <TouchableOpacity style={styles.button}>
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Text style={styles.fonteLogin}>Login</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.googleContainer}>
                    <Image
                        source={require("../assets/images/google.png")}
                        style={styles.googleIcon}/>
                    <Text style={styles.googleText}>Login with Google Account</Text> 
                </View> 
                
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Text style={{ color: "#aaaaaa", fontSize: 12 }}>
                    Don't have an account?{" "}
                </Text>
                
                <TouchableOpacity onPress={() => router.navigate('/')}>
                    <Text style={{ color: "#ae0000", fontSize: 12, fontWeight: "bold" }}>
                        Sign up
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Login:{
        color: "#ae0000",
        fontSize: 30,
        fontWeight: "bold",
        letterSpacing: 1,

        padding: 20
    },
    LoginBorder:{
        width: "80%",
        height: "45%",
        padding: 20,
        backgroundColor: "#1f1c1c", 
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 14,

        shadowColor: "#ffffff",
        shadowOffset: { width: 0.5, height: 2.5 },
        shadowOpacity: 0.20,
        shadowRadius: 10,
        elevation: 15, 
    },
    loginbox:{
        width: "100%",
        padding: 10,
        borderRadius: 15,
        marginBottom: 10,
        backgroundColor: "#383838",
        color: "#aaaaaa", 
        fontSize: 12
    },
    button:{
        width: "50%",
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#ae0000",
    },
    fonteLogin:{
        color: "white",
        fontSize: 14,
        letterSpacing: 1
    },

    googleContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
    },
    googleIcon:{
        width: 20,
        height: 20,
        resizeMode: "contain",
        marginRight: 8
    },
    googleText:{
        color: "#aaaaaa",
        fontSize: 12,
    }
});
