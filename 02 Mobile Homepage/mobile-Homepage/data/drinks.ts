export interface DrinkProps {
  id: number;
  nome: string;
  categoria: "Quente" | "Gelado";
  descricao: string;
  imagem: any;
}

export const drinks: DrinkProps[] = [
  {
    id: 1,
    nome: "Expresso",
    categoria: "Quente",
    descricao: "Dose curta e concentrada de café, com crema no topo. Intenso, aromático — base para muitos outros drinks.",
    imagem: require("../assets/hotOnes/expresso.jpg")
  },
  {
    id: 2,
    nome: "Cappuccino",
    categoria: "Quente",
    descricao: "Equilíbrio clássico de expresso, leite vaporizado e uma camada generosa de espuma. Toque final de cacau opcional.",
    imagem: require("../assets/hotOnes/cappuccino.jpg") 
  },
  {
    id: 3,
    nome: "Café com Leite",
    categoria: "Quente",
    descricao: "Meio a meio de café e leite quente — suave e reconfortante, ótimo para quem prefere menos intensidade.",
    imagem: require("../assets/hotOnes/comleite.jpg")
  },
  {
    id: 4,
    nome: "Iced Latte",
    categoria: "Gelado",
    descricao: "Expresso sobre gelo com bastante leite frio — cremoso e refrescante. Adicione xarope (baunilha/caramelo) se desejar.",
    imagem: require("../assets/icedOnes/icedLatte.png")
  },
  {
    id: 5,
    nome: "Cold Brew",
    categoria: "Gelado",
    descricao: "Café extraído a frio por horas, resultando em sabor suave, menos ácido e muito refrescante. Servido com gelo; opcional: um splash de água com gás.",
    imagem: require("../assets/icedOnes/coldBrew.png")
  },
  {
    id: 6,
    nome: "Affogato Gelado",
    categoria: "Gelado",
    descricao: "Bola de sorvete (baunilha) 'afogada' com uma dose de expresso quente — doce, cremoso e com contraste quente-frio.",
    imagem: require("../assets/icedOnes/affogato.png")
  }
];

export default drinks;
