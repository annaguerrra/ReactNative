import { router } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View, FlatList } from "react-native";
import { app } from '../firebaseConfig';
import DrinkCard from "@/components/drinkcard";
import { drinks } from "@/data/drinks";

export default function Homepage(){
    
    return(
        <View style={styles.container}>

            <Text style={styles.header}> MENU </Text>
            <FlatList 
                data={drinks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.cardcontainer}>
                        <DrinkCard
                            id={item.id}
                            nome={item.nome}
                            descricao={item.descricao}
                            categoria={item.categoria}
                            imagem={item.imagem}/>
                    </View>
                )}>
            </FlatList>
       </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#1A1410",
    },
    
    header:{
        color: "#F3EDE6",
        fontFamily: "Montserrat",
        fontWeight: "semibold",
        fontSize: 40,
        justifyContent: "flex-start",
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20
    },
    cardcontainer:{
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        height: 350,
        padding: 150,
        marginBottom: 30
    },
    
});