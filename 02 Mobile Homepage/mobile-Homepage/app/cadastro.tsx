import { db } from "@/firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, TextInput } from "react-native";
import Swal from "sweetalert2";

export default function Cadastro(){
    const [ nome, setNome] = useState("");
    const [ categoria, setCategoria] = useState("Quente"); // valor inicial válido
    const [ descricao, setDescricao] = useState("");
    const [imagem, setImagem] = useState<string | null>(null);
    const [ preco, setPreco] = useState("")
    const [ selected, setSelected] = useState("");
    const [ open, setOpen] = useState(false);

    const items = ["Quente", "Gelado"];

    const salvar = async () =>{
        try {

            if(!nome || !categoria || !descricao || !imagem || preco == "0" || preco == "0.00"){
                console.log('preencha todos os campos')
                return;
            }
            const imageUrl = await uploadImage();

            const drink = {
                nome,
                categoria,
                descricao,
                preco, 
                imagem: imageUrl,
                createdat: serverTimestamp(),
                update: serverTimestamp(),
            };
            await addDoc(collection(db, 'drinks'), drink);
            console.log('Successfully registered!')
           
        } 
        catch (e) {
            Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Something went wrong. Please try again."
                });
        }
    }

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
    });

        if (!result.canceled) {
            setImagem(result.assets[0].uri);
        }
    };

    const uploadImage = async () => {
        if (!imagem) return null;

        const storage = getStorage();
        const response = await fetch(imagem);
        const blob = await response.blob();

        const filename = `drinks/${Date.now()}.jpg`;
        const storageRef = ref(storage, filename);

        await uploadBytes(storageRef, blob);

        const url = await getDownloadURL(storageRef);
        return url;
    };


    return(
    <View style={styles.container}>

        <Text style={styles.header}> NOVO DRINK </Text>

         <TouchableOpacity style={styles.input} onPress={pickImage}>
            <Text style={{ color: "#C7C0B8", fontFamily: "Montserrat" }}>
                {imagem ? "Imagem selecionada ✓" : "Selecionar imagem"}
            </Text>
         </TouchableOpacity>
         <TextInput style={styles.input} onChangeText={setNome} placeholder='Enter drink name' placeholderTextColor="#C7C0B8"/>
         <TextInput style={styles.input} onChangeText={setDescricao} placeholder='Enter drink description' placeholderTextColor="#C7C0B8"/>       

        <TouchableOpacity style={styles.dropdown} onPress={() => setOpen(true)}>
            <Text style={styles.itemText}>{selected || "Select an option"}</Text>
        </TouchableOpacity>
    
        <Modal transparent visible={open} animationType="fade">
            <TouchableOpacity style={styles.options} onPress={() => setOpen(false)}>
                <View style={styles.listBox}>
                    {items.map((item) => (
                        <TouchableOpacity style={styles.item} key={item} onPress={() => {setSelected(item); setCategoria(item); setOpen(false);}}>
                            <Text style={styles.itemText}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </TouchableOpacity>
        </Modal>

        <TextInput style={styles.input} onChangeText={setPreco} placeholder='Enter drink price' placeholderTextColor="#C7C0B8"/>     
        
        
        <TouchableOpacity style={styles.saveButton}onPress={salvar}>
            <Text style={styles.saveText}>Salvar</Text>
        </TouchableOpacity>
        
    </View>
  );
}
// Sunset Latte Caramel
// Um latte cremoso feito com café espresso encorpado, leite vaporizado e uma camada generosa de caramelo artesanal. Finalizado com espuma aveludada, toque de baunilha e raspas finas de laranja para dar um aroma cítrico delicado que equilibra o doce.

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#1A1410",
        padding: 20,
        paddingTop: 60
    },

    header:{
        color: "#F3EDE6",
        fontFamily: "Montserrat",
        fontWeight: "600",
        fontSize: 32,
        marginBottom: 30,
    },

    input:{
        backgroundColor: "#2A221D",
        color: "#F3EDE6",
        padding: 15,
        marginBottom: 15,
        borderRadius: 8,
        fontSize: 16,
        fontFamily: "Montserrat",
        borderWidth: 1,
        borderColor: "#7A664E",
        
    },

    dropdown:{
        backgroundColor: "#2A221D",
        borderWidth: 1,
        borderColor: "#7A664E",
        padding: 15,
        borderRadius: 8,
        marginBottom: 20
    },

    options:{
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.3)",
        justifyContent: "center",
        alignItems: "center",
    },

    listBox:{
        backgroundColor: "#2A221D",
        width: "70%",
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#7A664E"
    },

    item:{
        padding: 15,
        borderBottomWidth: 1,
        borderColor: "#7A664E"
    },

    itemText:{
        color: "#C7C0B8",
        fontFamily: "Montserrat",
        fontSize: 16
    },

    saveButton:{
        backgroundColor: "#7A664E",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20,
        borderRadius: 10,
        alignItems: "center"
    },

    saveText:{
        color: "#F3EDE6",
        fontFamily: "Montserrat",
        fontWeight: "600",
        fontSize: 20,
        letterSpacing: 1.5
    }
});




