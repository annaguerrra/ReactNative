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
                title: "500 - Internal Server Error",
                text: "The server encountered an internal error or misconfiguration and was unable to complete your request"
            });
        }
    };

    return (
        <View style={styles.container}>

            <View style={styles.LoginBorder}>
                
                <Text style={styles.Login}>Login</Text>

                <TextInput
                    style={styles.input}
                    placeholder="E-mail, Login or Telephone"
                    placeholderTextColor="#777"
                    onChangeText={setEmail}
                />

                <View style={styles.passwordBox}>
                    <TextInput
                        style={styles.passwordinput}
                        placeholder="Password"
                        placeholderTextColor="#777"
                        secureTextEntry={!isPasswordVisible}
                        onChangeText={setPassword}
                    />

                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Icon name={isPasswordVisible ? "eye-slash" : "eye"} size={20} color={"#ddd"} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button} onPress={signIn}>
                    <Text style={styles.fonteLogin}>Login</Text>
                </TouchableOpacity>

                <View style={styles.googleContainer}>
                    <Image
                        source={require("../assets/images/google.png")}
                        style={styles.googleIcon}
                    />
                    <Text style={styles.googleText}>Login with Google Account</Text>
                </View>

                <View style={styles.bottomRow}>
                    <Text style={styles.bottomText}>Don't have an account? </Text>

                    <TouchableOpacity onPress={() => router.navigate('/')}>
                        <Text style={styles.bottomLink}>Sign up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#191313"
    },

    Login: {
        color: "#ae0000",
        fontSize: 30,
        fontWeight: "bold",
        letterSpacing: 1,
        padding: 20
    },

    LoginBorder: {
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

    input: {
        width: "100%",
        backgroundColor: "#2f2f2f",
        fontSize: 13,
        color: "#ddd",

        paddingVertical: 12,
        paddingHorizontal: 14,
        borderRadius: 12,
        marginBottom: 12,
    },

    passwordBox: {
        width: "100%",
        backgroundColor: "#2f2f2f",

        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 12,
        marginBottom: 12,
    },

    passwordinput: {
        flex: 1,
        fontSize: 13,
        color: "#ddd"
    },

    button: {
        width: "50%",
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#ae0000",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5
    },

    fonteLogin: {
        color: "white",
        fontSize: 14,
        letterSpacing: 1
    },

    googleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
    },

    googleIcon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        marginRight: 8
    },

    googleText: {
        color: "#aaaaaa",
        fontSize: 12,
    },

    bottomRow: {
        flexDirection: "row",
        marginTop: 15,
        alignItems: "center"
    },

    bottomText: {
        color: "#aaaaaa",
        fontSize: 12,
    },

    bottomLink: {
        color: "#ae0000",
        fontSize: 12,
        fontWeight: "bold"
    }
});
