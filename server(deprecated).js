// handle URLencoded requests
// app.use(express.urlencoded({ extended: true }));
// handle JSON requests
// app.use(express.json());

// [LEMBRETE para Robson]
// Detalhar os passos necessários para realizar a conexão com o BD local
// de qualquer outra máquina em ./config/config.json posteriormente
// Modularizar as APIs dividindo-as em arquivos separados

const express = require("express");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const md5 = require("md5");
const port = 3000;
const app = express();
const db = require("./models");
const lib = require("./lib/");
app.use(express.static('public'));
const adminRoutes = require('./routes/administrador');
app.use('/admin', adminRoutes);

// Sincronização inicial seguida pela inicialização do servidor
// Se for realizar rebuild (force) da base, lembrar de fazer DROP FOREIGN KEY previamente para evitar erros.
db.sequelize.sync({ force: false, alter: false }).then(
    () => {
        console.log("Sincronização realizada com o BD!");

        // Criando chaves estrangeiras de publicacao
        //db.sequelize.query(`ALTER TABLE publicacao
        //                ADD FOREIGN KEY(id_usuario) REFERENCES usuario(id),
        //                ADD FOREIGN KEY(id_categoria) REFERENCES categoria(id),
        //                ADD FOREIGN KEY(id_fotos) REFERENCES fotos(id)`).then(
        //    (resultado) => {
        //        console.log("Chaves estrangeiras criadas com sucesso.")
        //    }
        //).catch(
        //    (err) => {
        //        console.log("Falha na criação das chaves estrangeiras. Error: " + err);
        //    }
        //);

        app.listen(port, () => {
            console.log("Servidor escutando na porta " + port);
        });
    }
).catch(
    (err) => {
        console.log("Sincronização com o BD falhou. Error: " + err);
    }
);

// Tela com a lista de APIs em ./api

// APIs Administrador [GET]


// Retorna todos os dados de todos administradores
app.get("/api/admins", (req, res) => {
    // Via query do MySQL
    db.sequelize.query(`SELECT * FROM administrador`).then(
        (resultado) => {
            res.json({ "administrador": resultado[0] });
        }
    ).catch(
        (err) => {
            res.send(err.message);
            console.log("Leitura falhou. Error: " + err)
        }
    );
    // Via método do Sequelize
    /*db.administrador.findAll().then(
        (res) => console.log(res[0].id)
    ).catch(
        (err) => console.log("Leitura falhou. Error: " + err)
    );*/
});

// Busca de administradores por queries (id, email)
app.get("/api/admins/buscar", (req, res) => {
    if (req.query.id) {
        // Retorna administrador correspondente a id fornecida. Ex: /api/admins/buscar?id=1
        db.sequelize.query(`SELECT * FROM administrador WHERE id=${req.query.id}`).then(
            (resultado) => {
                res.json({ "administrador": resultado[0] });
            }
        ).catch(
            (err) => {
                res.send(err.message);
                console.log("Leitura falhou. Error: " + err)
            }
        );
    } else if (req.query.email) {
        // Retorna administrador correspondente ao email fornecido. Ex: /api/admins/buscar?email="admin3@example.com"
        db.sequelize.query(`SELECT * FROM administrador WHERE email="${req.query.email}"`).then(
            (resultado) => {
                res.json({ "administrador": resultado[0] });
            }
        ).catch(
            (err) => {
                console.log("Leitura falhou. Error: " + err)
            }
        );
    } else {
        res.send("Parâmetro de busca inválido");
    }   
});

// Cria novo administrador internamente (sem uso de req.param, req.query ou req.body)
app.get("/api/admins/add", (req, res) => {
    //db.sequelize.query(`INSERT INTO administrador (nome, sobrenome, email, senha)` +
    //    `VALUES ("admin2", "admin2", "admin2@example.com", "senha2")`).then(
    //        (resultado) => {
    //            res.sendStatus(200);
    //            console.log("Inserção de administrador realizada com sucesso.");
    //            //res.redirect("/api/admins");
    //        }
    //    ).catch(
    //        (err) => console.log("Inserção falhou. Error: " + err)
    //    );
    db.administrador.create({
        nome: "admin3",
        sobrenome: "admin3",
        email: "admin3@example.com",
        senha: "senha3"
    }).then(
        (resultado) => {
            res.sendStatus(200);
            console.log("Inserção de administrador realizada com sucesso.");
        }
    ).catch(
        (err) => {
            res.send(err.message);
            console.log("Inserção falhou. Error: " + err);
        }
    );
});

// Criando administradores em grande quantidade ou backup da tabela
app.get("/api/admins/addAll", (req, res) => {
    db.administrador.bulkCreate(administradores).then(
        (resultado) => {
            res.sendStatus(200);
            console.log("Inserção de administradores realizada com sucesso.");
        }
    ).catch(
        (err) => {
            res.send(err.message);
            console.log("Inserção falhou. Error: " + err);
        }
    );
});

// Apaga todos os dados dos administradores
app.get("/api/admins/reset", (req, res) => {
    db.sequelize.query(`DELETE FROM administrador`).then(
        (resultado) => {
            res.sendStatus(200);
        }
    ).catch(
        (err) => {
            res.send(err.message);
            console.log("Deleção falhou. Error: " + err)
        }
    );
});
// Exclui e recria a tabela administrador
app.get("/api/admins/recreate", (req, res) => {
    db.sequelize.query(`DROP TABLE administrador`).then(
        (resultado) => {
            // Recriação
            db.sequelize.sync({ force: true }).then(
                (resultado) => {
                    res.sendStatus(200);
                }
            ).catch(
                (err) => {
                    res.send(err.message);
                    console.log("Recriação da tabela falhou. Error: " + err)
                }
            )
        }
    ).catch(
        (err) => {
            res.send(err.message);
            console.log("Exclusão da tabela falhou. Error: " + err);
        }
    );
});


// APIs Usuário [GET]


// APIs Publicação [GET]

// Retorna todos os dados de todas as publicações
app.get("/api/publicacoes", (req, res) => {
    // Via raw query
    db.sequelize.query(`SELECT * FROM publicacao`).then(
        (resultado) => {
            res.json({ "publicacao": resultado[0] });
        }
    ).catch((err) => {
        res.send(err.message);
        console.log("Leitura falhou. Error: " + err)
    });
});
// Cria nova publicacao internamente (sem uso de req.param, req.query ou req.body)
app.get("/api/publicacoes/add", (req, res) => {
    // Alterar o campo tipo_negociacao no modelo para ENUM("Venda", "Troca");
    db.publicacao.create({
        id_usuario: 3,
        id_categoria: 3,
        id_fotos: 3,
        titulo: "Gaiola Para Pet",
        tipo_negociacao: "Venda",
        preco: 200,
        descricao_produto: "lorem ipsum",
        descricao_vendedor: "lorem ipsum",
        validada: 0,
        finalizada: 0,
        motivo_rejeicao: "lorem ipsum"
    }).then(
        (resultado) => {
            res.sendStatus(200);
            console.log("Inserção de publicacao realizada com sucesso.");
        }
    ).catch(
        (err) => {
            res.send(err.message);
            console.log("Inserção falhou. Error: " + err);
        }
    );
});

// Criando publicações em grande quantidade ou backup da tabela
app.get("/api/publicacoes/addAll", (req, res) => {
    db.publicacao.bulkCreate(publicacoes).then(
        (resultado) => {
            res.sendStatus(200);
            console.log("Inserção de administradores realizada com sucesso.");
        }
    ).catch(
        (err) => {
            res.send(err.message);
            console.log("Inserção falhou. Error: " + err);
        }
    );
});

// Apaga todos os dados das publicacoes
app.get("/api/publicacoes/reset", (req, res) => {
    db.sequelize.query(`DELETE FROM publicacao`).then(
        (resultado) => {
            res.sendStatus(200);
        }
    ).catch(
        (err) => {
            res.send(err.message);
            console.log("Deleção falhou. Error: " + err);
        }
    );
});
// Exclui e recria a tabela publicacao
app.get("/api/publicacoes/recreate", (req, res) => {
    db.sequelize.query(`DROP TABLE publicacao`).then(
        (resultado) => {
            // Recriação
            // Precisa remover chaves estrangeiras previamente. Implementar o query apropriado e encadear o método junto ao sync abaixo
            db.sequelize.sync({ force: true }).then(
                (resultado) => {
                    res.sendStatus(200);
                }
            ).catch(
                (err) => {
                    res.send(err.message);
                    console.log("Recriação da tabela falhou. Error: " + err);
                }
            )
        }
    ).catch(
        (err) => {
            res.send(err.message);
            console.log("Exclusão da tabela falhou. Error: " + err);
        }
    );
});

// Victória
//Busca de publicação por título
app.get("/api/publicação/buscarTitulo", (req, res) => {
    if(req.query.titulo) {
        // Retorna o título da publicação correspondente ao titulo fornecido. Ex: /api/publicação/buscaTitulo?titulo="This Is Not A Flamethrower"
        db.sequelize.query(`SELECT * FROM publicacao WHERE titulo=${req.query.titulo}`).then(
            (resultado) => {
                res.json({ "Título": resultado[0] });
            }
        ).catch(
            (err) => {
                res.send(err.message);
                console.log("Leitura falhou. Error: " + err);
            }
        );
    } else {
        res.send("Parâmetro de busca inválido");
    }
});

app.get("/api/publicacao/categoriaId", (req, res) => {
    if(req.query.id_categoria) {
        // Retorna publicação correspondente a id de categoria fornecida. Ex: /api/publicacao/buscar?id_categoria=1
        db.sequelize.query(`SELECT * FROM publicacao WHERE id_categoria=${req.query.id_categoria}`).then(
            (resultado) => {
                res.json({ "Id categoria da publicação": resultado[0] });
            }
        ).catch(
            (err) => {
                res.send(err.message);
                console.log("Leitura falhou. Error: " + err);
            }
        );
        }
    });
        app.get("/api/publicacao/nomeCategoria", (req, res) => {
            if(req.query.id_categoria) {
                // Retorna publicação correspondente a id de categoria fornecida. Ex: /api/publicacao/buscar?id_categoria=1
                db.sequelize.query(`SELECT * FROM publicacao INNER JOIN categoria ON publicacao.id_categoria = categoria.id WHERE categoria.nome =${req.query.id_categoria}`).then(
                    (resultado) => {
                        res.json({ "Id categoria da publicação": resultado[0] });
                    }
                ).catch(
                    (err) => {
                        res.send(err.message);
                        console.log("Leitura falhou. Error: " + err);
                    }
            );
                }
        });

//Aluska
// Busca de Publicações
app.get("/api/publicacoes/buscar", (req, res) => {
    if (req.query.id_usuario) {
        // Retorna publicacões correspondente a id do usuario fornecida. Ex: /api/publicacoes/buscar?id_usuario=1
        db.sequelize.query(`SELECT * FROM publicacao WHERE id=${req.query.id_usuario}`).then(
            (resultado) => {
                res.json({ "publicacao": resultado[0] });
            }
        ).catch(
            (err) => {
                res.send(err.message);
                console.log("Leitura falhou. Error: " + err);
            }
        );
    } else if (req.query.titulo) {
        // Retorna publicacao correspondente ao titulo fornecido. Ex: /api/publicacoes/buscar?titulo="Gaiola para Pet"
        db.sequelize.query(`SELECT * FROM publicacao WHERE titulo="${req.query.titulo}"`).then(
            (resultado) => {
                res.json({ "publicacao": resultado[0] });
            }
        ).catch(
            (err) => {
                res.send(err.message);
                console.log("Leitura falhou. Error: " + err);
            }
        );
    } else {
        res.send("Parâmetro de busca inválido");
    }
});

// APIs Categoria [GET]
// Retorna todos os dados de todas as publicações
app.get("/api/publicacoes", (req, res) => {
    // Via raw query
    db.sequelize.query(`SELECT * FROM publicacao`).then(
        (resultado) => {
            res.json({ "publicacao": resultado[0] });
        }
    ).catch(
        (err) => {
            res.send(err.message);
            console.log("Leitura falhou. Error: " + err);
        }
    );
});
// Cria nova publicacao internamente (sem uso de req.param, req.query ou req.body)
app.get("/api/publicacoes/add", (req, res) => {
    // Alterar o campo tipo_negociacao no modelo para ENUM("Venda", "Troca");
    db.publicacao.create({
        id_usuario: 3,
        id_categoria: 3,
        id_fotos: 3,
        titulo: "Gaiola Para Pet",
        tipo_negociacao: "Venda",
        preco: 200,
        descricao_produto: "lorem ipsum",
        descricao_vendedor: "lorem ipsum",
        validada: 0,
        finalizada: 0,
        motivo_rejeicao: "lorem ipsum"
    }).then(
        (resultado) => {
            res.sendStatus(200);
            console.log("Inserção de publicacao realizada com sucesso.");
        }
    ).catch(
        (err) => {
            res.send(err.message);
            console.log("Inserção falhou. Error: " + err);
        }
    );
});

// Criando publicações em grande quantidade ou backup da tabela
app.get("/api/publicacoes/addAll", (req, res) => {
    db.publicacao.bulkCreate(publicacoes).then(
        (resultado) => {
            res.sendStatus(200);
            console.log("Inserção de administradores realizada com sucesso.");
        }
    ).catch(
        (err) => {
            res.send(err.message);
            console.log("Inserção falhou. Error: " + err);
        }
    );
});

// Apaga todos os dados das publicacoes
app.get("/api/publicacoes/reset", (req, res) => {
    db.sequelize.query(`DELETE FROM publicacao`).then(
        (resultado) => {
            res.sendStatus(200);
        }
    ).catch(
        (err) => {
            res.send(err.message);
            console.log("Deleção falhou. Error: " + err);
        }
    );
});
// Exclui e recria a tabela publicacao
app.get("/api/publicacoes/recreate", (req, res) => {
    db.sequelize.query(`DROP TABLE publicacao`).then(
        (resultado) => {
            // Recriação
            // Precisa remover chaves estrangeiras previamente. Implementar o query apropriado e encadear o método junto ao sync abaixo
            db.sequelize.sync({ force: true }).then(
                (resultado) => {
                    res.sendStatus(200);
                }
            ).catch(
                (err) => {
                    res.send(err.message);
                    console.log("Recriação da tabela falhou. Error: " + err);
                }
            )
        }
    ).catch(
        (err) => {
            res.send(err.message);
            console.log("Exclusão da tabela falhou. Error: " + err);
        }
    );
});

//Joselinda

app.get("/api/categoria/buscar", (req, res) => {
    if (req.query.id) {
        // Retorna categoria correspondente a id fornecida. Ex: /api/categorias/buscar?id=1
        db.sequelize.query(`SELECT * FROM categoria WHERE id=${req.query.id}`).then(
            (resultado) => {
                res.json({ "categoria": resultado[0] });
            }
        ).catch(
            (err) => {
                res.send(err.message);
                console.log("Leitura falhou. Error: " + err);
            }
        );
    } else if (req.query.nome) {
        // Retorna categoria correspondente ao nome fornecido. Ex: /api/categorias/buscar?nome="Eletrônicos"
        db.sequelize.query(`SELECT * FROM categoria WHERE nome="${req.query.nome}"`).then(
            (resultado) => {
                res.json({ "categoria": resultado[0] });
            }
        ).catch(
            (err) => {
                res.send(err.message);
                console.log("Leitura falhou. Error: " + err);
            }
        );
    } else {
        res.send("Parâmetro de busca inválido");
    }
});

// APIs Foto [GET]


// APIs Administrador [POST]


// APIs Usuário [POST]


// APIs Publicação [POST]


// APIs Categoria [POST]


// Rotas adicionais
// ...
//app.get('/fotos', (req, res) => {
//    res.send('public/api/fotos.html');
//});
app.post('/upload', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.send("all good");
});

// Importar estes dados de arwuivos diferentes para cada tabela
// Dados para testes com a base

let administradores = [
    {
        "nome": "Administrador 1",
        "sobrenome": "Sobrenome 1",
        "email": "admin1@example.com",
        "senha": "senha1"
    },
    {
        "nome": "Administrador 2",
        "sobrenome": "Sobrenome 2",
        "email": "admin2@example.com",
        "senha": "senha2"
    },
    {
        "nome": "Administrador 3",
        "sobrenome": "Sobrenome 3",
        "email": "admin3@example.com",
        "senha": "senha3"
    },
    {
        "nome": "Administrador 4",
        "sobrenome": "Sobrenome 4",
        "email": "admin4@example.com",
        "senha": "senha4"
    },
    {
        "nome": "Administrador 5",
        "sobrenome": "Sobrenome 5",
        "email": "admin5@example.com",
        "senha": "senha5"
    },
    {
        "nome": "Administrador 6",
        "sobrenome": "Sobrenome 6",
        "email": "admin6@example.com",
        "senha": "senha6"
    },
    {
        "nome": "Administrador 7",
        "sobrenome": "Sobrenome 7",
        "email": "admin7@example.com",
        "senha": "senha7"
    },
    {
        "nome": "Administrador 8",
        "sobrenome": "Sobrenome 8",
        "email": "admin8@example.com",
        "senha": "senha8"
    },
    {
        "nome": "Administrador 9",
        "sobrenome": "Sobrenome 9",
        "email": "admin9@example.com",
        "senha": "senha9"
    },
    {
        "nome": "Administrador 10",
        "sobrenome": "Sobrenome 10",
        "email": "admin10@example.com",
        "senha": "senha10"
    }
];

// Corrigir campos para ficarem alinhados com o model
let categorias = [
    {
        "id": 1,
        "nome": "Eletrônicos"
    },
    {
        "id": 2,
        "nome": "Roupas"
    },
    {
        "id": 3,
        "nome": "Acessórios"
    },
    {
        "id": 4,
        "nome": "Livros"
    },
    {
        "id": 5,
        "nome": "Móveis"
    },
    {
        "id": 6,
        "nome": "Esportes"
    },
    {
        "id": 7,
        "nome": "Joias"
    },
    {
        "id": 8,
        "nome": "Beleza"
    },
    {
        "id": 9,
        "nome": "Brinquedos"
    },
    {
        "id": 10,
        "nome": "Instrumentos Musicais"
    }
];

// Corrigir campos para ficarem alinhados com o model
let usuarios = [
    {
        "id": 1,
        "nome": "João",
        "sobrenome": "Soares",
        "email": "joaosoares@example.com",
        "cpf": "12345678901",
        "senha": "senha1",
        "telefone": "123456789",
        "foto": null,
        "vendas": null,
        "trocas": null,
        "id_publicacoes": 1,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id": 2,
        "nome": "Ursula",
        "sobrenome": "Silva",
        "email": "Ursulasilva@example.com",
        "cpf": "23456789012",
        "senha": "senha2",
        "telefone": "234567890",
        "foto": null,
        "vendas": null,
        "trocas": null,
        "id_publicacoes": 2,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id": 3,
        "nome": "Paulo",
        "sobrenome": "Gomes",
        "email": "paulogomex@example.com",
        "cpf": "34567890123",
        "senha": "senha3",
        "telefone": "345678901",
        "foto": null,
        "vendas": null,
        "trocas": null,
        "id_publicacoes": 3,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id": 4,
        "nome": "Matias",
        "sobrenome": "Saadhak",
        "email": "matiassaadhak@example.com",
        "cpf": "45678901234",
        "senha": "senha4",
        "telefone": "456789012",
        "foto": null,
        "vendas": null,
        "trocas": null,
        "id_publicacoes": 4,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id": 5,
        "nome": "Erick",
        "sobrenome": "Santos",
        "email": "ericksantos@example.com",
        "cpf": "56789012345",
        "senha": "senha5",
        "telefone": "567890123",
        "foto": null,
        "vendas": null,
        "trocas": null,
        "id_publicacoes": 5,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id": 6,
        "nome": "cauan",
        "sobrenome": "Pereira",
        "email": "cauanpereira@example.com",
        "cpf": "67890123456",
        "senha": "senha6",
        "telefone": "678901234",
        "foto": null,
        "vendas": null,
        "trocas": null,
        "id_publicacoes": 6,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id": 7,
        "nome": "Felipe",
        "sobrenome": "Basso",
        "email": "felipebasso@example.com",
        "cpf": "78901234567",
        "senha": "senha7",
        "telefone": "789012345",
        "foto": null,
        "vendas": null,
        "trocas": null,
        "id_publicacoes": 7,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id": 8,
        "nome": "Arthur",
        "sobrenome": "Vieira",
        "email": "arthurvieira@example.com",
        "cpf": "89012345678",
        "senha": "senha8",
        "telefone": "890123456",
        "foto": null,
        "vendas": null,
        "trocas": null,
        "id_publicacoes": 8,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id": 9,
        "nome": "Bryan",
        "sobrenome": "Luna",
        "email": "bryanluna@example.com",
        "cpf": "90123456789",
        "senha": "senha9",
        "telefone": "901234567",
        "foto": null,
        "vendas": null,
        "trocas": null,
        "id_publicacoes": 9,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id": 10,
        "nome": "Gustavo",
        "sobrenome": "Rossi",
        "email": "gustavorossi@example.com",
        "cpf": "69821304568",
        "senha": "senha10",
        "telefone": "89542136",
        "foto": null,
        "vendas": null,
        "trocas": null,
        "id_publicacoes": 10,
        "suspenso": 0,
        "motivo_suspensao": null
    }
];

// Corrigir campos para ficarem alinhados com o model
let publicacoes = [
    {
        "id": 1,
        "id_usuario": 1,
        "id_categoria": 1,
        "id_fotos": 1,
        "titulo": "vestido g",
        "tipo_negociacao": "Venda",
        "preco": 19.99,
        "descricao_produto": "Descrição do produto 1",
        "descricao_vendedor": "Descrição do vendedor 1",
        "id_fotos": 1,
        "validada": 1,
        "finalizada": 0,
        "motivo_rejeicao": null
    },
    {
        "id": 2,
        "id_usuario": 2,
        "id_categoria": 1,
        "titulo": "saia junina P",
        "tipo_negociacao": "Venda",
        "preco": 14.99,
        "descricao_produto": "Descrição do produto 2",
        "descricao_vendedor": "Descrição do vendedor 2",
        "id_fotos": 2,
        "validada": 1,
        "finalizada": 0,
        "motivo_rejeicao": null
    },
    {
        "id": 3,
        "id_usuario": 3,
        "id_categoria": 2,
        "titulo": "compressor de pintura",
        "tipo_negociacao": "Troca",
        "preco": 159.90,
        "descricao_produto": "Descrição do produto 3",
        "descricao_vendedor": "Descrição do vendedor 3",
        "id_fotos": 3,
        "validada": 1,
        "finalizada": 0,
        "motivo_rejeicao": null
    },
    {
        "id": 4,
        "id_usuario": 4,
        "id_categoria": 2,
        "titulo": "celta 2000",
        "tipo_negociacao": "Venda",
        "preco": 8.000,
        "descricao_produto": "Descrição do produto 4",
        "descricao_vendedor": "Descrição do vendedor 4",
        "id_fotos": 4,
        "validada": 0,
        "finalizada": 0,
        "motivo_rejeicao": null
    },
    {
        "id": 5,
        "id_usuario": 5,
        "id_categoria": 3,
        "titulo": "violao",
        "tipo_negociacao": "Venda",
        "preco": 99.99,
        "descricao_produto": "Descrição do produto 5",
        "descricao_vendedor": "Descrição do vendedor 5",
        "id_fotos": 5,
        "validada": 1,
        "finalizada": 1,
        "motivo_rejeicao": null
    },
    {
        "id": 6,
        "id_usuario": 6,
        "id_categoria": 3,
        "titulo": "colecao moedas olimpicas",
        "tipo_negociacao": "Venda",
        "preco": 399.99,
        "descricao_produto": "Descrição do produto 6",
        "descricao_vendedor": "Descrição do vendedor 6",
        "id_fotos": 6,
        "validada": 1,
        "finalizada": 1,
        "motivo_rejeicao": null
    },

    {
        "id": 7,
        "id_usuario": 7,
        "id_categoria": 4,
        "titulo": "mesa rustica 4 cadeiras",
        "tipo_negociacao": "Venda",
        "preco": 200.00,
        "descricao_produto": "Descrição do produto 7",
        "descricao_vendedor": "Descrição do vendedor 7",
        "id_fotos": 7,
        "validada": 1,
        "finalizada": 1,
        "motivo_rejeicao": null
    },
    {
        "id": 8,
        "id_usuario": 8,
        "id_categoria": 4,
        "titulo": "guarda sol",
        "tipo_negociacao": "Venda",
        "preco": 25.00,
        "descricao_produto": "Descrição do produto 8",
        "descricao_vendedor": "Descrição do vendedor 8",
        "id_fotos": 8,
        "validada": 1,
        "finalizada": 0,
        "motivo_rejeicao": null
    },
    {
        "id": 9,
        "id_usuario": 9,
        "id_categoria": 5,
        "titulo": "biquine pp",
        "tipo_negociacao": "Venda",
        "preco": 7.99,
        "descricao_produto": "Descrição do produto 9",
        "descricao_vendedor": "Descrição do vendedor 9",
        "id_fotos": 9,
        "validada": 1,
        "finalizada": 0,
        "motivo_rejeicao": null
    },
    {
        "id": 10,
        "id_usuario": 10,
        "id_categoria": 5,
        "titulo": "notebook i5",
        "tipo_negociacao": "Venda",
        "preco": 800.00,
        "descricao_produto": "Descrição do produto 10",
        "descricao_vendedor": "Descrição do vendedor 10",
        "id_fotos": 10,
        "validada": 1,
        "finalizada": 0,
        "motivo_rejeicao": null
    }

];