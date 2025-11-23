import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View, Alert } from "react-native";
import { useEffect, useState } from "react";
import { DrinkProps } from "@/data/drinks";

export default function DrinkCard({nome, descricao, categoria, imagem}: DrinkProps){
    const [isFlipped , setIsFlipped] = useState(false);

    return(
        <View>
            <TouchableOpacity onPress={() => setIsFlipped(!isFlipped)}>
                {isFlipped ? 
                (<View>
                    <Text>{nome}</Text>
                    <Text style={styles.cardtext}>{descricao}</Text>
                    <Text>Categoria: {categoria}</Text>
                </View>) :
                (<View>
                    <Text>{nome}</Text>
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
    },
    cardtext:{
        width: 300,
        fontSize: 20
    },
    cardTitle:{
        
    }
})