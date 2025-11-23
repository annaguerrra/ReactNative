import { app } from "@/firebaseConfig";
import { router } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View } from "react-native";
import Swal from "sweetalert2";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const auth = getAuth(app);

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.navigate('/homepage');
        } catch (e) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Invalid credentials. Try again!"
            });
        }
    };

    return (
        <View style={styles.container}>

            <View style={styles.loginCard}>
                
                <Text style={styles.loginTitle}>Login</Text>

                <TextInput
                    style={styles.input}
                    placeholder="E-mail, Login or Telephone"
                    placeholderTextColor="#777"
                    onChangeText={setEmail}
                />

                <View style={styles.passwordBox}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Password"
                        placeholderTextColor="#777"
                        secureTextEntry={!isPasswordVisible}
                        onChangeText={setPassword}
                    />

                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Icon 
                            name={isPasswordVisible ? "eye-slash" : "eye"} 
                            size={20} 
                            color={"#aaaaaa"} 
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button} onPress={signIn}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <View style={styles.googleRow}>
                    <Image
                        source={require("../assets/images/google.png")}
                        style={styles.googleIcon}
                    />
                    <Text style={styles.googleText}>Login with Google Account</Text>
                </View>

                <View style={styles.bottomRow}>
                    <Text style={styles.bottomText}>Don't have an account? </Text>

                    <TouchableOpacity onPress={() => router.navigate('/')}>
                        <Text style={styles.loginLink}>Sign up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1A1410",
    },

    loginCard:{
        width: "80%",
        padding: 25,
        backgroundColor: "#221B16",
        borderRadius: 18,
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 10,
    },

    loginTitle:{
        color: "#7A664E",
        fontSize: 32,
        fontFamily: "Montserrat",
        fontWeight: "600",
        marginBottom: 20,
        letterSpacing: 1.5
    },

    input:{
        width: "100%",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 14,
        marginBottom: 12,

        fontSize: 14,
        fontFamily: "Inter",
        color: "#F3EDE6",
        backgroundColor: "#372e28ff",
    },

    passwordBox:{
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 14,
        marginBottom: 14,
        backgroundColor: "#372e28ff",
    },

    passwordInput:{
        flex: 1,
        fontSize: 14,
        fontFamily: "Inter",
        color: "#F3EDE6",
    },

    button:{
        width: "60%",
        paddingVertical: 13,
        backgroundColor: "#7A664E",
        borderRadius: 18,
        marginTop: 10,
        alignItems: "center",
    },

    buttonText:{
        color: "#1A1410",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0.5,
    },

    googleRow:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 22,
    },

    googleIcon:{
        width: 22,
        height: 22,
        resizeMode: "contain",
        marginRight: 8,
    },

    googleText:{
        color: "#C2B8AE",
        fontSize: 12,
    },

    bottomRow:{
        flexDirection: "row",
        marginTop: 18,
    },

    bottomText:{
        color: "#C2B8AE",
        fontSize: 12,
    },

    loginLink:{
        color: "#7A664E",
        fontSize: 12,
        fontWeight: "bold",
    },
});
