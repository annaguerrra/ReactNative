import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View, Alert } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebaseConfig';
import { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function App(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const auth = getAuth(app);

    const signUp = () => {
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password);
        } else {
            return Alert.alert("Error", "Login or Password are Incorrect");
        }
    };

    useEffect(() => {
        console.log(email, password, confirmPassword);
    }, [email, password, confirmPassword]);

    return(
        <View style={styles.container}>
            <View style={styles.loginCard}>
                
                <Text style={styles.loginTitle}>Sign Up</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    placeholder="E-mail, Login or Telephone"
                    placeholderTextColor="#777"
                />
                
                <View style={styles.passwordBox}>
                    <TextInput
                        style={styles.passwordInput}
                        secureTextEntry={!isPasswordVisible}
                        onChangeText={setPassword}
                        placeholder="Password"
                        placeholderTextColor="#777"
                    />

                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Icon name={isPasswordVisible ? "eye-slash" : "eye"} size={20} color="#aaaaaa" />
                    </TouchableOpacity>
                </View>

                <View style={styles.passwordBox}>
                    <TextInput
                        secureTextEntry={!isPasswordVisible}
                        onChangeText={setConfirmPassword}
                        placeholder="Confirm Password"
                        placeholderTextColor="#777"
                        style={styles.passwordInput}
                    />

                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Icon name={isPasswordVisible ? "eye-slash" : "eye"} size={20} color="#aaaaaa" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button} onPress={signUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <View style={styles.googleRow}>
                    <Image
                        source={require("../assets/images/google.png")}
                        style={styles.googleIcon}
                    />
                    <Text style={styles.googleText}>Sign up with Google Account</Text>
                </View>

                <View style={styles.bottomRow}>
                    <Text style={styles.bottomText}>Already have an account? </Text>

                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.loginLink}>Login</Text>
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
        backgroundColor: "#191313",
    },

    loginCard:{
        width: "80%",
        padding: 25,
        backgroundColor: "#1f1c1c",
        borderRadius: 18,
        alignItems: "center",

        shadowColor: "#fff",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 12,
    },

    loginTitle:{
        color: "#ae0000",
        fontSize: 32,
        fontWeight: "700",
        letterSpacing: 1,
        marginBottom: 15,
    },

    input:{
        width: "100%",
        paddingVertical: 12,
        paddingHorizontal: 14,
        backgroundColor: "#2f2f2f",
        borderRadius: 12,
        fontSize: 13,
        color: "#ddd",
        marginBottom: 12,
    },

    passwordBox:{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2f2f2f",
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 12,
        marginBottom: 12,
    },

    passwordInput:{
        flex: 1,
        color: "#ddd",
        fontSize: 13,
    },

    button:{
        width: "60%",
        padding: 12,
        backgroundColor: "#ae0000",
        borderRadius: 14,
        marginTop: 5,
        alignItems: "center",
    },

    buttonText:{
        color: "#fff",
        fontSize: 15,
        fontWeight: "600",
        letterSpacing: 0.5,
    },

    googleRow:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },

    googleIcon:{
        width: 22,
        height: 22,
        resizeMode: "contain",
        marginRight: 8,
    },

    googleText:{
        color: "#bbb",
        fontSize: 12,
    },

    bottomRow:{
        flexDirection: "row",
        marginTop: 18,
    },

    bottomText:{
        color: "#aaa",
        fontSize: 12,
    },

    loginLink:{
        color: "#ae0000",
        fontSize: 12,
        fontWeight: "bold",
    },
});
