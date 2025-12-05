import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View } from "react-native";

export default function profile(){
    const[ imagem, setImagem] = useState("");
    const[ carrinho, setCarrinho] = useState("");
    const[ nome, setNome] = useState("");
    const[ email, setEmail] = useState("");

    return(
        <View style={styles.container}>

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        padding: 5
    },
});