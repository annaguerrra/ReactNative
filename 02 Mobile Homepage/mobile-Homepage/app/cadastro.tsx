import { useState } from "react";

export default function Cadastro(){
    const [visible, setVisible] = useState(false);
    const [nome, setNome] = useState("");
    const [categoria, setCategoria] = useState("Quente");
    const [preco, setPreco] = useState(0);
    const [descricao, setDescricao] = useState("");
    const [imagem, setImagem] = useState("");

};
