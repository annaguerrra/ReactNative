import { router } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View, FlatList } from "react-native";
import { app } from '../firebaseConfig';
import DrinkCard from "@/components/drinkcard";
import { drinks } from "@/data/drinks";

export default function Homepage(){
    
    return(
        <View style={styles.container}>

            <Text style={styles.header}> Welcome Back! </Text>
            <FlatList 
                data={drinks}
                numColumns={2}
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
        backgroundColor: "#191313",
        justifyContent: "center",
        alignItems: "center",
    },
    
    header:{
        flex: 1,
        color: "#bbb",
        fontWeight: "bold",
        fontSize: 32,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 150,
    },
    cardcontainer:{
        flex: 1,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        padding: 150,
        marginBottom: 30
    },
    
});