const data = {
    administrador: [
        {
            nome: "Claudia",
            sobrenome: "Pereira",
            email: "claudiapereira@gmail.com",
            senha: "claudia123"
        },
        {
            nome: "José",
            sobrenome: "Silva",
            email: "zesilva@gmail.com",
            senha: "qualqueruma"
        },
        {
            nome: "Leonardo",
            sobrenome: "Alves",
            email: "leoalves1@gmail.com",
            senha: "anhes!2#"
        },
        {
            nome: "Davinte",
            sobrenome: "Leo",
            email: "da20@gmail.com",
            senha: "senha!2#"
        },
        {
            nome: "Rodrigo",
            sobrenome: "Santoro",
            email: "digo032222@gmail.com",
            senha: "opw2293"
        },
        {
            nome: "Sexta",
            sobrenome: "Feira",
            email: "dia623@gmail.com",
            senha: "pass342*&"
        },
        {
            nome: "Gugu",
            sobrenome: "pinho",
            email: "tudkji@gmail.com",
            senha: "çauassuca"

        }
    ],
    usuario: [
        {
            nome: "Maria",
            sobrenome: "Silveira",
            email: "marsilveira@outlook.com",
            cpf: "12345678911",
            senha: 1234,
            telefone: "77988886666",
            foto: "maria.jpg"
        },
        {
            nome: "Ana Lucia",
            sobrenome: "Ramos",
            email: "anaramos@gmail.com",
            cpf: "12345678910",
            senha: 1234,
            telefone: "77988886666",
            foto: "ana.jpeg"
        },
        {
            nome: "Davi",
            sobrenome: "Ferreira",
            email: "daviferreira@gmail.com",
            cpf: "12345675552",
            senha: 4567,
            telefone: "77988880000",
            foto: "davi.jpeg"
        },
        {
            nome: "Patricia",
            sobrenome: "Silva",
            email: "patriciasilva@gmail.com",
            cpf: "12345671113",
            senha: 1111,
            telefone: "77988887777",
            foto: "patricia.png"
        },
        {
            nome: "Luiz",
            sobrenome: "Barros",
            email: "luizbarros@gmail.com",
            cpf: "12345678914",
            senha: 6789,
            telefone: "77988884444",
            foto: "luiz.jpeg"
        },
        {
            nome: "Joao",
            sobrenome: "Garcia",
            email: "garcias@gmail.com",
            cpf: "12345671115",
            senha: 1111,
            telefone: "77988882222",
            foto: "joao.jpeg"
        },
        {
            nome: "Marcos",
            sobrenome: "Moraes",
            email: "mmarcos@gmail.com",
            cpf: "12345672226",
            senha: 3333,
            telefone: "77900002222",
            foto: "marcos.jpeg"
        },
        {
            nome: "Maria",
            sobrenome: "Costa",
            email: "mariacosta@gmail.com",
            cpf: "12345673337",
            senha: 4444,
            telefone: "77988883333",
            foto: "maria.jpeg"
        },
        {
            nome: "Lionel Andrés",
            sobrenome: "Messi",
            email: "Lionelmessi@hotmail.com",
            cpf: "87509345821",
            senha: 87432,
            telefone: "81987643021",
            foto: "MessiPerfil.jpg"
        },
        {
            nome: "Elon Reeve",
            sobrenome: "Musk",
            email: "elonteslamusk@outlook.com",
            cpf: "13290748561",
            senha: 6326423,
            telefone: "8876342981",
            foto: "elon-musk.webp"
        },
        {
            nome: "Robyn Rihanna",
            sobrenome: "Fenty",
            email: "ririfenty@gmail.com",
            cpf: "98439213458",
            senha: 928312,
            telefone: "8732743897",
            foto: "rihannaPerfil.jpg"
        },
        {
            nome: "Guccio Rossi",
            sobrenome: "Gucci",
            email: "ggeasy21@gmail.com",
            cpf: "64390821348",
            senha: 672372,
            telefone: "8876390234",
            foto: "Guccio_Gucci.jpg"
        },
        {
            nome: "Jennifer Aniston",
            sobrenome: "Oliver",
            email: "jenniaoliver3@gmail.com",
            cpf: "64890213985",
            senha: 832321,
            telefone: "8398623401",
            foto: "jenniferaniston.jpg"
        },
        {
            nome: "Lúcio Barros",
            sobrenome: "Gelado",
            email: "ficafrioai2@gmail.com",
            cpf: "63982019834",
            senha: 123300,
            telefone: "8987325049",
            foto: "gelado.jpg"
        },
        {
            nome: "Dominic Toretto",
            sobrenome: "Velossi",
            email: "domtoretto3@gmail.com",
            cpf: "53789201983",
            senha: 399382,
            telefone: "8187304377",
            foto: "domtoretto.webp"
        },
    ],
    categoria: [
        {
            nome: "Agro"
        },
        {
            nome: "Animais"
        },
        {
            nome: "Antiguidade e Coleções"
        },
        {
            nome: "Arte"
        },
        {
            nome: "Automotivo"
        },
        {
            nome: "Bebês"
        },
        {
            nome: "Beleza"
        },
        {
            nome: "Bolsas"
        },
        {
            nome: "Brinquedos"
        },
        {
            nome: "Calçados"
        },
        {
            nome: "Casa"
        },
        {
            nome: "Eletrodomésticos"
        },
        {
            nome: "Eletrônicos"
        },
        {
            nome: "Esportes e Fitness"
        },
        {
            nome: "Ferramentas e Construção"
        },
        {
            nome: "Filmes e Seriados"
        },
        {
            nome: "Fotografia"
        },
        {
            nome: "Jogos"
        },
        {
            nome: "Joias"
        },
        {
            nome: "Livros"
        },
        {
            nome: "Moda"
        },
        {
            nome: "Música e Instrumentos"
        },
        {
            nome: "Outros"
        },
        {
            nome: "Saúde"
        }
    ],
    publicacao: [
        {
            id_categoria: 20,
            id_usuario: 1,
            id_fotos: 1,
            titulo: "Box de Livros Percy Jackson",
            tipo_negociacao: "venda",
            preco: 250,
            descricao_produto:
                "Coleção de livros da saga Percy Jackson e os Olimpianos em bom estado de conservação. Acompanha marcadores de livro da franquia também.",
            descricao_vendedor:
                "Sou colecionadora de várias franquias literárias e gosto de fazer bons negócios com os livros mais antigos que tenho ou compro de outros colecionadores. Faço envios para todo o país e meu contato é (77) 98888-0000"
        },
        {
            id_categoria: 21,
            id_usuario: 2,
            id_fotos: 2,
            titulo: "Vestido feminino",
            tipo_negociacao: "venda",
            preco: 60,
            descricao_produto:
                "Vestido feminino casual de verão, gola V, cor lisa, estampa de bolinhas, manga curta, amarrado, vestido de verão.",
            descricao_vendedor:
                "Sou vendedora e atuo há mais de 15 anos em moda feminina, sempre de olho nas tendências a fim de proporcionar uma ótima experiência de compra no site. Faço envios para todo o país e meu contato é (77) 98888-6666"
        },
        {
            id_categoria: 16,
            id_usuario: 3,
            id_fotos: 3,
            titulo: "DVD Star Wars A Nova Trilogia",
            tipo_negociacao: "venda",
            preco: 40,
            descricao_produto:
                "Star Wars A Nova Trilogia inclui os filmes 'A Ameaça Fantasma', 'Ataque dos Clones' e 'A Vingança dos Sith'.",
            descricao_vendedor:
                "Sou Davi Ferreira, atuo com vendas de DVDs de filmes clássicos. Faço envios para todo o Brasil, meu contato é (77) 98888-0000"
        },
        {
            id_categoria: 14,
            id_usuario: 4,
            id_fotos: 4,
            titulo: "Bola de futebol",
            tipo_negociacao: "venda",
            preco: 90,
            descricao_produto:
                "Bola Futebol de Campo Penalty Player XXI Costurada.",
            descricao_vendedor:
                "Vendedora Patrícia Silva, atuo com vendas de artigos esportivos. Faço envios para todo o Brasil e meu contato é (77) 98888-7777"
        },
        {
            id_categoria: 15,
            id_usuario: 5,
            id_fotos: 5,
            titulo: "Maleta de ferramentas",
            tipo_negociacao: "venda",
            preco: 90,
            descricao_produto:
                "Sparta Maleta de ferramentas kit com 129 peças.",
            descricao_vendedor:
                "Vendedor Luiz Barros, atuo há mais de 20 anos no ramo de ferramentas e construção, sempre à disposição para proporcionar uma ótima experiência de compra. Faço envios para todo o país e meu contato é (77) 98888-4444"
        },
        {
            id_categoria: 23,
            id_usuario: 6,
            id_fotos: 6,
            titulo: "Tesouras profissionais",
            tipo_negociacao: "venda",
            preco: 100,
            descricao_produto: "Kit 3 Tesouras Profissionais + Navalha + Estojo P/ Barbeiro - Dourado.",
            descricao_vendedor: "Vendedor  João Garcia, vendo materiais de barbearia profissional, sempre a disposição a fim de proporcionar uma excelente experiência de compra. Faço envios para todo o Brasil e meu contato é (77) 98888-2222"
        },
        {
            id_categoria: 20,
            id_usuario: 7,
            id_fotos: 7,
            titulo: "Livro de direito",
            tipo_negociacao: "venda",
            preco: 40,
            descricao_produto: "Teoria do Ordenamento Jurídico Capa comum – Edição especial, 1 fevereiro 2019.",
            descricao_vendedor: "Vendedor  Marcos Moraes, vendo livros acadêmicos usados. Faço envios para todo o Brasil e meu contato é (77) 90000-2222"
        },
        {
            id_categoria: 21,
            id_usuario: 8,
            id_fotos: 8,
            titulo: "Camiseta fitness",
            tipo_negociacao: "venda",
            preco: 50,
            descricao_produto:
                "Blusa Camiseta Fitness Feminina Caminhada Academia Treino.",
            descricao_vendedor:
                "Vendedora Maria Costa, vendo vestuários esportivos. Faço envios para todo o Brasil e meu contato é (77) 98888-3333"
        },
        {
            id_categoria: 6,
            id_usuario: 1,
            id_fotos: 9,
            titulo: "bebe conforto",
            tipo_negociacao: "venda",
            preco: 200,
            descricao_produto: "Comprei mas tinha ganho outra está nova nunca foi usada ainda está na caixa.",
            descricao_vendedor: "Retirada em minha residência(moro  em rua 12 ,36 areias ,Recife ,Pe - meu fone (81) 999557519"
        },
        {
            id_categoria: 22,
            id_usuario: 2,
            id_fotos: 10,
            titulo: "violao",
            tipo_negociacao: "venda",
            preco: 150,
            descricao_produto: "violão gianini .",
            descricao_vendedor: "pouco uso, braço reto fone (81)998653214"
        },
        {
            id_categoria: 21,
            id_usuario: 3,
            id_fotos: 11,
            titulo: "blusa pp",
            tipo_negociacao: "venda",
            preco: 15,
            descricao_produto: " blusa linha preta pp.",
            descricao_vendedor: "pouco usada fone (81)96545623"
        },
        {
            id_categoria: 10,
            id_usuario: 4,
            id_fotos: 12,
            titulo: "bota cano alto",
            tipo_negociacao: "venda",
            preco: 60,
            descricao_produto: "bota tamanho 36 marrom .",
            descricao_vendedor: "seminova fone (81)92658945"
        },
        {
            id_categoria: 14,
            id_usuario: 5,
            id_fotos: 13,
            titulo: "Bola da copa do mundo de 2014",
            tipo_negociacao: "venda",
            preco: 200,
            descricao_produto: "Bola usada na final da copa do mundo,bem conservada e no plástico ainda",
            descricao_vendedor: "Amante do futebol,e apaixonado por colecionar momentos do futebol,seja através de bolas de futebol até camisa autografadas.Para obter algum produto que eu esteja vendendo é só me ligar,meu número é (81)987643021."
        },
        {
            id_categoria: 13,
            id_usuario: 5,
            id_fotos: 14,
            titulo: "Iphone 8 plus 64gb",
            tipo_negociacao: "Troca",
            preco: 0,
            descricao_produto: "Produto com um ano de uso,sem avarias,mas com um pequeno problema na tela,gostaria de trocar pelo samsung S21",
            descricao_vendedor: "A vida é uma troca com troco,saiba fazer as contas."
        },
        {
            id_categoria: 7,
            id_usuario: 6,
            id_fotos: 15,
            titulo: "Base Fenty Beauty",
            tipo_negociacao: "venda",
            preco: 221.00,
            descricao_produto: "Base Fenty marca da queridinha Rihanna,na cor matte suave de longa duração com cobertura média a alta,que possibilita construir camadas,em uma variedade sem limites de 50 tonalidades",
            descricao_vendedor: "Qual é a maquiagem que mais te faz FELIZ? Conheça a nossa loja e comprove por si mesma a felicidade em formato de MAQUIAGEM."
        },
        {   
            id_categoria: 8,
            id_usuario: 7,
            id_fotos: 16,
            titulo: "Gucci Bolsa GG Marmont Mini",
            tipo_negociacao: "venda",
            preco: 14520.00,
            descricao_produto: "Bolsa Gucci mini branca de couro chevron,com alça de ombro removível em couro e corrente com 54,6 cm,duplo G,detalhe de coração na parte posterior",
            descricao_vendedor: " Se não for para desfilar com minha linda bolsa, nem vou."
        },
        {   
            id_categoria: 11,
            id_usuario: 8,
            id_fotos: 17,
            titulo: "Sofá Retrátil e Reclinável Cama inBox Compact 1,50m Tecido Suede Velusoft Cinza",
            tipo_negociacao: "venda",
            preco: 799.90,
            descricao_produto: "Ideal para ambientes compactos e sofisticados, o Sofá Cama inBox Compact de 2 lugares irá renovar a beleza da sua sala, assim como trazer muito conforto para você.",
            descricao_vendedor: "Quer conforto ? compre um sofá"
        },
        {   
            id_categoria: 12,
            id_usuario: 1,
            id_fotos: 18,
            titulo: "Geladeira usada em ótima conservação",
            tipo_negociacao: "venda",
            preco: 500.00,
            descricao_produto: "Geladeira Dako 380 litros funcionando e em ótima conservação.Produto usado !",
            descricao_vendedor: "Fica frio aí"
        },
        {   
            id_categoria: 9,
            id_usuario: 2,
            id_fotos: 19,
            titulo: "Pacote 5 Carros Sortidos, Hot Wheels, Mattel",
            tipo_negociacao: "venda",
            preco: 65.08,
            descricao_produto: "Os meninos vão adorar este combo da Mattel, pois vem com cinco veículos fantásticos! Todos em die-cast. Cada embalagem é uma nova coleção, velocidade e aventura com Hot Wheels!",
            descricao_vendedor: "E aí vai encarar ?"
        },


    ],
    fotos: [
        {
            foto1: "pj1.jpg",
            foto2: "pj2.jpg",
            foto3: "pj3.jpg",
            foto4: "pj4.jpeg"
        },
        {
            foto1: "vestido_verde.jpg",
            foto2: "vestido_frontal.jpg",
            foto3: "vestido_costas.jpg",
            foto4: "medidas_.jpg"
        },
        {
            foto1: "61k1irEbsdL.jpeg",
            foto2: "91rpwMrMAvL.jpeg",

        },
        {
            foto1: "bola_futebl1_.jpg",
            foto2: "bola_futebl2_.jpg",
            foto3: "bola_futebl3_.jpg",
            foto4: "bola_futebl4_.jpg"
        },
        {
            foto1: "maleta_ferramenta.jpg",
            foto2: "maleta_ferramenta1.jpg",
            foto3: "maleta_ferramenta2.jpg",
            foto4: "maleta_ferramenta3.jpg"
        },
        {
            foto1: "tesouras_1.jpg",
            foto2: "tesouras_2.jpg",
            foto3: "tesouras_3.jpg",
            foto4: "tesouras_4.jpg"
        },
        {
            foto1: "livro.jpg",
            foto2: "livro2.jpg"

        },
        {
            foto1: "blusa1.jpg",
            foto2: "blusa2.jpg",
            foto3: "blusa3.jpg",

        },
        {
            foto1: "61qP3LJx53S._AC_SL1100_.jpg",
            foto2: "517zNDTB6hS._AC_SL1100_.jpg",
            foto3: "616lwoOJXGS._AC_SL1100_.jpg"
        },
        {
            foto1: "233329140663699.webp",

        },
        {
            foto1: "img_1647_20.jpg",
            foto2: "img_3299_24.jpg"
        },
        {
            foto1: "O01-1783-138_zoom1.webp",
        },
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
    ]
};

module.exports = data;
//console.log(JSON.stringify(data))