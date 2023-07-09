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
        }
    ],
    categoria: [
        {
            nome: "outros"
        },
        {
            nome: "roupas"
        },
        {
            nome: "livros"
        },
        {
            nome: "dvd"
        },
        {
            nome: "esportes"
        },
        {
            nome: "ferramentas e construcao"
        },
        {
            nome: "beleza"
        },
        {
            nome: "roupas esportivas"
        }
    ],
    publicacao: [
        {   
            id_categoria: 3,
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
            id_categoria: 2,
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
            id_categoria: 4,
            id_usuario: 3,
            id_fotos: 3,
            titulo: "Dvd Star Wars A Nova Trilogia",
            tipo_negociacao: "venda",
            preco: 40,
            descricao_produto:
                "Star Wars A Nova Trilogia inclui os filmes 'A Ameaça Fantasma', 'Ataque dos Clones' e 'A Vingança dos Sith'.",
            descricao_vendedor:
                "Sou Davi Ferreira, atuo com vendas de DVDs de filmes clássicos. Faço envios para todo o Brasil, meu contato é (77) 98888-0000"
        },
        {   
            id_categoria: 5,
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
            id_categoria: 6,
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
            id_categoria: 6,
            id_usuario: 6,
            id_fotos: 6,
            titulo: "Tesouras profissionais",
            tipo_negociacao: "venda",
            preco: 100,
            descricao_produto: "Kit 3 Tesouras Profissionais + Navalha + Estojo P/ Barbeiro - Dourado.",
            descricao_vendedor: "Vendedor  João Garcia, vendo materiais de barbearia profissional, sempre a disposição a fim de proporcionar uma excelente experiência de compra. Faço envios para todo o Brasil e meu contato é (77) 98888-2222"
        },
        {   
            id_categoria: 3,
            id_usuario: 7,
            id_fotos: 7,
            titulo: "Livro de direito",
            tipo_negociacao: "venda",
            preco: 40,
            descricao_produto: "Teoria do Ordenamento Jurídico Capa comum – Edição especial, 1 fevereiro 2019.",
            descricao_vendedor: "Vendedor  Marcos Moraes, vendo livros acadêmicos usados. Faço envios para todo o Brasil e meu contato é (77) 90000-2222"
        },
        {
            id_categoria: 8,
            id_usuario: 8,
            id_fotos: 8,
            titulo: "Camiseta fitness",
            tipo_negociacao: "venda",
            preco: 50,
            descricao_produto:
                "Blusa Camiseta Fitness Feminina Caminhada Academia Treino.",
            descricao_vendedor:
                "Vendedora Maria Costa, vendo vestuários esportivos. Faço envios para todo o Brasil e meu contato é (77) 98888-3333"
        }
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
            
        }
    ]
};

module.exports = data;
//console.log(JSON.stringify(data))