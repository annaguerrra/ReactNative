import { app } from "@/firebaseConfig";
import { router } from "expo-router";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View, ViewComponent } from "react-native";
import Swal from "sweetalert2";

export default function cadastro(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const auth = getAuth(app)
    const minpassword = 6;

     const signUp = async () => {
        if(password.length < minpassword){
            return Swal.fire({
                icon: "error",
                title: "Error",
                text: "The password must contain at least 6 characters!"
            })
        }
        if(password !== confirmPassword){
            return Swal.fire({
                icon: "error",
                title: "Error",
                text: "The passwords does not match."
            })
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "User registered"
            });
            router.navigate('/');
        } 
        catch (e) {
            return Swal.fire({
                icon: "error",
                title: "Error",
                text: "This e-mail is already in use"
            })
        }
    };
    
    return(
        <View style={styles.container}>
            <Image
                style= {styles.gif}
                source={require("../assets/gif.gif")}/>
           <Text style={styles.loginText}>Register</Text> 

            <TextInput
                    style={styles.input}
                    placeholder="E-mail, Login or Telephone"
                    placeholderTextColor="#4f53a1"
                    onChangeText={setEmail}
                />

            <View style={styles.passwordBox}>
                <TextInput  
                    style = {styles.passwordInput}
                    secureTextEntry={!isPasswordVisible}
                    onChangeText={setPassword}
                    placeholder="Password"
                    placeholderTextColor="#4f53a1"
                />

                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    <Icon name={isPasswordVisible ? "eye-slash" : "eye"} size={20} color="#4f53a1" />
                </TouchableOpacity>
            </View>

            <View style={styles.passwordBox}>
                <TextInput  
                    style = {styles.passwordInput}
                    secureTextEntry={!isPasswordVisible}
                    onChangeText={setPassword}
                    placeholder="Confirm password"
                    placeholderTextColor="#4f53a1"
                />

                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    <Icon name={isPasswordVisible ? "eye-slash" : "eye"} size={20} color="#4f53a1" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => router.navigate('/')}>
                <Text style={styles.buttonInput}>Salvar</Text>
            </TouchableOpacity>
            
        </View>
    )
};

const styles  =StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d4d5d9"
    },
    gif:{
        justifyContent: "flex-start",
        width: 350,
        height: 200,
        marginBottom: 20
    },
    loginText:{
        color: "#4f53a1",
        fontFamily: "San Francisco",
        fontWeight: "600",
        fontSize: 40,

        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    input:{
        width: "100%",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 14,
        marginBottom: 12,

        fontSize: 14,
        fontFamily: "Inter",
        color: "#4f53a1",
        backgroundColor: "#d4d5d9",
    },
    passwordBox:{
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 14,
        marginBottom: 14,
        backgroundColor: "#d4d5d9",
    },
    passwordInput:{
        flex: 1,
        fontSize: 14,
        fontFamily: "Inter",
        color: "#4f53a1",
    },
    button:{
        width: "50%",
        paddingVertical: 13,
        backgroundColor: "#4f53a1",
        borderRadius: 20,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonInput:{
        fontFamily: "San Francisco",
        fontSize: 22,
        fontWeight: "400",
        color: "#d4d5d9"
    }
})