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
    id: 7,
    nome: "Mocha",
    categoria: "Quente",
    descricao: "Combinação de expresso, chocolate e leite vaporizado. Doce, encorpado e perfeito para quem ama chocolate.",
    imagem: require("../assets/hotOnes/mocha.png")
  },
  {
    id: 8,
    nome: "Macchiato",
    categoria: "Quente",
    descricao: "Expresso marcado com uma pequena quantidade de espuma de leite. Intenso, com leve suavidade.",
    imagem: require("../assets/hotOnes/macchiato.png")
  },
  {
    id: 9,
    nome: "Chá Latte",
    categoria: "Quente",
    descricao: "Mistura cremosa de chá preto com leite quente e especiarias suaves. Alternativa perfeita para quem quer algo quente sem café.",
    imagem: require("../assets/hotOnes/chaLatte.png")
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
  },
  {
    id: 10,
    nome: "Iced Caramel Macchiato",
    categoria: "Gelado",
    descricao: "Leite frio com gelo, expresso por cima e calda de caramelo. Doce, refrescante e muito popular.",
    imagem: require("../assets/icedOnes/icedCaramel.png")
  },
  {
    id: 11,
    nome: "Frappé de Café",
    categoria: "Gelado",
    descricao: "Café batido com gelo até formar espuma, servido bem gelado. Leve e super refrescante.",
    imagem: require("../assets/icedOnes/frappe.png")
  },
  {
    id: 12,
    nome: "Iced Mocha",
    categoria: "Gelado",
    descricao: "Expresso gelado misturado com chocolate e leite, servido com gelo. Doce e cremoso.",
    imagem: require("../assets/icedOnes/icedMocha.png")
  }
];

export default drinks;
