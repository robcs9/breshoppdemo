// Exemplo de criação de Dados:

const administrador = [
    {
        nome: "Maria Lindoso",
        sobrenome: "Mota",
        email: "Marialmota12@gmail.com",
        senha: "758943"
    },
    {
        nome: "Steve Jobs",
        sobrenome: "Santos",
        email: "stevetrabalho21@gmail.com",
        senha: "iphone13promax"
    },
    {
        nome: "Wiliam Shakespeare",
        sobrenome: "Moreira",
        email: "romeujulieta09@gmail.com",
        senha: "01011595"
    },
    {
        nome: "Maria Castro",
        sobrenome: "Dias",
        email: "MariaCastroDias@outlook.com",
        senha: "85073793"
    },
    {
        nome: "Luiz Sousa",
        sobrenome: "Fernandes",
        email: "LuizSousaFernandes@gmail.com",
        senha: "743822"
    },
    {
        nome: "Marcus Oliver",
        sobrenome: "Mallcom",
        email: "marcusom23@gmail.com",
        senha: "3480409"
    },
    {
        nome: "Eduarda Lima",
        sobrenome: "Araujo",
        email: "EduardaLimaAraujo@hotmail.com",
        senha: "72328583"
    },
];

const usuario = [
    {
        nome: "Lionel Andrés",
        sobrenome: "Messi",
        email: "Lionelmessi@hotmail.com",
        cpf: "87509345821",
        senha:87432 ,
        telefone: "81987643021",
        foto: "MessiPerfil.jpg"
    },
    {
        nome: "Elon Reeve",
        sobrenome: "Musk",
        email: "elonteslamusk@outlook.com",
        cpf: "13290748561",
        senha:6326423,
        telefone: "8876342981",
        foto: "elon-musk.webp"
    },
    {
        nome: "Robyn Rihanna",
        sobrenome: "Fenty",
        email: "ririfenty@gmail.com",
        cpf: "98439213458",
        senha:928312,
        telefone: "8732743897",
        foto: "rihannaPerfil.jpg"
    },
    {
        nome: "Guccio Rossi",
        sobrenome: "Gucci",
        email: "ggeasy21@gmail.com",
        cpf: "64390821348",
        senha:672372,
        telefone: "8876390234",
        foto: "Guccio_Gucci.jpg"
    },
    {
        nome: "Jennifer Aniston",
        sobrenome: "Oliver",
        email: "jenniaoliver3@gmail.com",
        cpf: "64890213985",
        senha:832321,
        telefone: "8398623401",
        foto: "jenniferaniston.jpg"
    },
    {
        nome: "Lúcio Barros",
        sobrenome: "Gelado",
        email: "ficafrioai2@gmail.com",
        cpf: "63982019834",
        senha:123300,
        telefone: "8987325049",
        foto: "gelado.jpg"
    },
    {
        nome: "Dominic Toretto",
        sobrenome: "Velossi",
        email: "domtoretto3@gmail.com",
        cpf: "53789201983",
        senha:399382,
        telefone: "8187304377",
        foto: "domtoretto.webp"
    },
];

const categoria = [
    {
        nome: "Colecionáveis"
    },
    {
        nome: "Eletrônicos"
    },
    {
        nome: "Maquiagem"
    },
    {
        nome: "Bolsas"
    },
    {
        nome: "Móveis"
    },
    {
        nome: "Eletrodomésticos"
    },
    {
        nome: "Brinquedos"
    },
];

const publicacao = [
    {
        titulo: "Bola da copa do mundo de 2014",
        tipo_negociacao: "venda",
        preco: 200,
        descricao_produto: "Bola usada na final da copa do mundo,bem conservada e no plástico ainda",
        descricao_vendedor: "Amante do futebol,e apaixonado por colecionar momentos do futebol,seja através de bolas de futebol até camisa autografadas.Para obter algum produto que eu esteja vendendo é só me ligar,meu número é (81)987643021."
    },
    {
        titulo: "Iphone 8 plus 64gb",
        tipo_negociacao: "Troca",
        preco: 0,
        descricao_produto: "Produto com um ano de uso,sem avarias,mas com um pequeno problema na tela,gostaria de trocar pelo samsung S21",
        descricao_vendedor: "A vida é uma troca com troco,saiba fazer as contas."
    },
    {
        titulo: "Base Fenty Beauty",
        tipo_negociacao: "venda",
        preco: 221.00,
        descricao_produto: "Base Fenty marca da queridinha Rihanna,na cor matte suave de longa duração com cobertura média a alta,que possibilita construir camadas,em uma variedade sem limites de 50 tonalidades",
        descricao_vendedor: "Qual é a maquiagem que mais te faz FELIZ? Conheça a nossa loja e comprove por si mesma a felicidade em formato de MAQUIAGEM."
    },
    {
        titulo: "Gucci-Bolsa GG Marmont Mini",
        tipo_negociacao: "venda",
        preco: 14520.00,
        descricao_produto: "Bolsa Gucci mini branca de couro chevron,com alça de ombro removível em couro e corrente com 54,6 cm,duplo G,detalhe de coração na parte posterior",
        descricao_vendedor: " Se não for para desfilar com minha linda bolsa, nem vou."
    },
    {
        titulo: "Sofá Retrátil e Reclinável Cama inBox Compact 1,50m Tecido Suede Velusoft Cinza",
        tipo_negociacao: "venda",
        preco: 799.90,
        descricao_produto: "Ideal para ambientes compactos e sofisticados, o Sofá Cama inBox Compact de 2 lugares irá renovar a beleza da sua sala, assim como trazer muito conforto para você.",
        descricao_vendedor: "Quer conforto ? compre um sofá"
    },
    {
        titulo: "Geladeira usada em ótima conservação",
        tipo_negociacao: "venda",
        preco: 500.00,
        descricao_produto: "Geladeira Dako 380 litros funcionando e em ótima conservação.Produto usado !",
        descricao_vendedor: "Fica frio aí"
    },
    {
        titulo: "Pacote 5 Carros Sortidos, Hot Wheels, Mattel",
        tipo_negociacao: "venda",
        preco: 65.08,
        descricao_produto: "Os meninos vão adorar este combo da Mattel, pois vem com cinco veículos fantásticos! Todos em die-cast. Cada embalagem é uma nova coleção, velocidade e aventura com Hot Wheels!",
        descricao_vendedor: "E aí vai encarar ?"
    },
]

const fotos = [
    {
        foto1: "brazucaFt1.jpg",
        foto2: "brazucaFt2.jpg",
        foto3: "brazucaFt3.jpg",
        foto4: "brazucaFt4.jpg"
    },
    {
        foto1: "iphone1.jpg",
        foto2: "iphone2.jpg",
        foto3: "iphone3.jpg",
        foto4: "iphone4.jpg"
    },
    {
        foto1: "base1.webp",
        foto2: "base2.webp",
        foto3: "base3.webp",
        foto4: "base4.webp"
    },
    {
        foto1: "bolsagg1.webp",
        foto2: "bolsagg2.webp",
        foto3: "bolsagg3.webp",
        foto4: "bolsagg4.webp"
    },
    {
        foto1: "sofa1.webp",
        foto2: "sofa2.webp",
        foto3: "sofa3.webp",
        foto4: "sofa4.webp"
    },
    {
        foto1: "geladeira1.webp",
        foto2: "geladeira2.webp",
        foto3: "geladeira3.webp",
        foto4: "geladeira4.webp"
    },
    {
        foto1: "carrinho1.jpg",
        foto2: "carrinho2.webp",
        foto3: "carrinho3.webp",
        foto4: "carrinho4.webp"
    },
];

