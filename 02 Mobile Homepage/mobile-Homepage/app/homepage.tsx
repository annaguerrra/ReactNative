import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";
import { app } from '../firebaseConfig';
import DrinkCard from "@/components/drinkcard";
import { drinks } from "@/data/drinks";

export default function Homepage(){

    return(
        <View style={styles.container}>
            

            <View style={styles.topHeader}>
                <Text style={styles.header}> MENU </Text>

                <TouchableOpacity style={styles.novoButton}>
                    <Text style={styles.novoButtonText} onPress={() => router.navigate('/cadastro')}> + Novo</Text>
                </TouchableOpacity>
            </View>

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
                            preco={item.preco}
                            imagem={item.imagem}
                        />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#1A1410",
    },
    topHeader:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 10,
        gap: 20
    },
    header:{
        color: "#F3EDE6",
        fontFamily: "Montserrat",
        fontWeight: "600",
        fontSize: 40,
    },
    novoButton:{
        backgroundColor: "#7A664E",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    novoButtonText:{
        color: "#F3EDE6",
        fontFamily: "Montserrat",
        fontWeight: "600",
        fontSize: 20,
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
