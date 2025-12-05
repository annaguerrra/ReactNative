import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View, Alert } from "react-native";
import { useEffect, useState } from "react";
import { DrinkProps } from "@/data/drinks";

export default function DrinkCard({nome, descricao, categoria, preco, imagem}: DrinkProps){
    const [isFlipped , setIsFlipped] = useState(false);

    return(
        <View>
            <TouchableOpacity onPress={() => setIsFlipped(!isFlipped)}>
                {isFlipped ? 
                (<View style={styles.square}>
                    <Text style={styles.cardTitleFront}>{nome}</Text>
                    <Text style={styles.cardtext}>{descricao}</Text>
                    <Text style={styles.cardcategory} >Categoria: {categoria}</Text>
                    <Text style={styles.cardcategory}>Preço: R$ {preco}</Text>
                </View>) :
                (<View >
                    <Text style={styles.cardTitleFront}>{nome}</Text>
                    <Image source={imagem} style={styles.verseImage}/>
                </View>)}
                
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    verseImage:{
        width: 300,
        height: 300,
        marginBottom: 10,
    },
    cardTitleFront:{
        color: "#F3EDE6",
        fontFamily: "Montserrat",
        fontWeight: "semibold",
        fontSize: 22,
        padding: 15,
        marginTop: 5
    },
    cardtext:{
        width: 300,
        fontSize: 20,
        fontFamily: "Inter",
        fontWeight: "regular",
        padding: 10,
        color: "#FFF7EF",
        textAlign: "justify"
    },
    cardcategory:{
        width: 300,
        fontSize: 20,
        fontFamily: "Inter",
        fontWeight: "medium",
        padding: 10,
        color:"#F3EDE6",
        textAlign: "justify"
    },
    square:{
        width: 300,
        height: 300,
        backgroundColor: "#7A664E",
        borderRadius: 10
    }
})