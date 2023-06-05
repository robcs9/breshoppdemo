// handle URLencoded requests
// app.use(express.urlencoded({ extended: true }));
// handle JSON requests
// app.use(express.json());

// [LEMBRETE]
// Detalhar os passos necessários para realizar a conexão com o BD local
// de qualquer outra máquina em ./config/config.json posteriormente

const express = require("express");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const md5 = require("md5");
const port = 3000;
const app = express();
const db = require("./models");
const lib = require("./lib/");
app.use(express.static('public'));

// Sincronização inicial seguida pela inicialização do servidor
db.sequelize.sync().then(
    () => {
        console.log("Sincronização realizada com o BD!");
        app.listen(port, () => {
            console.log("Servidor funcionando na porta " + port);
        });
    }
).catch(
    (err) => {
        console.log("Sincronização com o BD falhou. Error: " + err);
    }
);


// APIs Administrador [GET]

// Retorna todos os dados de todos administradores
app.get("/api/admins", (req, res) => {
    // Via query do MySQL
    db.sequelize.query(`SELECT * FROM administrador`).then(
        (resultado) => {
            res.json({ "administrador": resultado[0] });
        }
    ).catch(
        (err) => console.log("Leitura falhou. Error: " + err)
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
    if(req.query.id) {
        // Retorna administrador correspondente a id fornecida. Ex: /api/admins/buscar?id=1
        db.sequelize.query(`SELECT * FROM administrador WHERE id=${req.query.id}`).then(
            (resultado) => {
                res.json({ "administrador": resultado[0] });
            }
        ).catch(
            (err) => console.log("Leitura falhou. Error: " + err)
        );
    } else if(req.query.email) {
        // Retorna administrador correspondente ao email fornecido. Ex: /api/admins/buscar?email="admin3@example.com"
        db.sequelize.query(`SELECT * FROM administrador WHERE email="${req.query.email}"`).then(
            (resultado) => {
                res.json({ "administrador": resultado[0] });
            }
        ).catch(
            (err) => console.log("Leitura falhou. Error: " + err)
        );
    } else {
        res.send("Parâmetro de busca inválido");
    }
});

// Cria novo administrador internamente (sem uso de req.param, req.query ou req.body)
app.get("/api/admins/add", (req, res) => {
    db.sequelize.query(`INSERT INTO administrador (nome, sobrenome, email, senha)` +
    `VALUES ("admin3", "minda3", "admin3@example.com", "senha3")`).then(
        (resultado) => {
            res.sendStatus(200);
            //res.redirect("/api/admins");
        }
    ).catch(
        (err) => console.log("Inserção falhou. Error: " + err)
    );
});

// Limpa todos os dados dos administradores
app.get("/api/admins/reset", (req, res) => {
    db.sequelize.query(`DELETE FROM administrador`).then(
        (resultado) => {
            res.sendStatus(200);
        }
    ).catch(
        (err) => console.log("Deleção falhou. Error: " + err)
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
                (err) => console.log("Recriação da tabela falhou. Error: " + err)
            )
        }
    ).catch(
        (err) => console.log("Exclusão da tabela falhou. Error: " + err)
    );
});


// APIs Usuário [GET]


// APIs Publicação [GET]


// APIs Categoria [GET]


// APIs Foto [GET]

// APIs Administrador [POST]

// Rotas adicionais
