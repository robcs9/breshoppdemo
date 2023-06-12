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
//const lib = require("./lib/");

app.use(express.static('public'));
app.use('/api/admin', require('./routes/administrador'));
app.use('/api/usuario', require('./routes/usuario'));
app.use('/api/categoria', require('./routes/categoria'));
app.use('/api/publicacao', require('./routes/publicacao'));
app.use('/autenticar', require('./routes/autenticacao'));

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

// Tela com a lista de APIs em /public/api


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
    if (req.query.titulo) {
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
    if (req.query.id_categoria) {
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
    if (req.query.id_categoria) {
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