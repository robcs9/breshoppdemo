const db = require("../models");
const { erroCallback } = require('../lib/erroCallback')

exports.getTodosUsuario = (req, res) => {
    db.usuario.findAll().then(
        (r) => {
            console.log(r);
            res.json(r);
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

exports.getUsuarioPorId = (req, res) => {
    db.usuario.findByPk(req.params.id).then(
        (r) => {
            console.log(r);
            res.json(r);
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

exports.getUsuarioPorEmail = (req, res) => {
    db.usuario.findOne({
        where: {
            email: req.params.email
        }
    }).then(
        (r) => {
            console.log(r);
            res.json(r);
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

exports.cadastrarUsuario = (req, res) => {
    db.usuario.create(
        {
            //id: req.body.id,
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            cpf: req.body.cpf,
            senha: req.body.senha,
            telefone: req.body.telefone,
            foto: req.body.foto,
            //vendas: 0,
            //trocas: 0,
            //suspenso: 0,
            //motivo_suspensao: req.body.motivo_suspensao
        }
    ).then(
        (r) => {
            console.log(r);
            res.send("Usuário cadastrado com sucesso");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

exports.setUsuario = (req, res) => {
    db.usuario.update(
        {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            //email: req.body.email,
            //cpf: req.body.cpf,
            senha: req.body.senha,
            telefone: req.body.telefone,
            foto: req.body.foto,
            vendas: req.body.vendas,
            trocas: req.body.trocas,
            suspenso: req.body.suspenso,
            motivo_suspensao: req.body.motivo_suspensao
        }, {
            where: {
                id: req.body.id
            }
        }
    ).then(
        (r) => {
            console.log(r);
            res.send("Usuário atualizado com sucesso");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

exports.finalizarPublicacao = (req, res) => {
    db.publicacao.update({
        finalizada: 1
    }, {
        where: {
            id: req.body.id
        }
    }).then(
        (r) => {
            console.log(r);
            res.send("Publicação finalizada com sucesso");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

exports.limparTodos = (req, res) => {
    db.sequelize.query("SET FOREIGN_KEY_CHECKS = 0").then(
        () => {
            db.usuario.destroy(
                {
                    truncate: true
                }
            ).then(
                (r) => {
                    console.log(r);
                    res.send("Usuários excluídos com sucesso");
                }
            ).catch(
                (err) => {
                    res.send(erroCallback(err));
                }
            )
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    ).finally(
        () => {
            db.sequelize.query("SET FOREIGN_KEY_CHECKS = 1").then().catch();
        }
    )
};

exports.excluirUsuario = (req, res) => {
    db.usuario.destroy(
        {
            where: {
                id: req.body.id
            }
        }
    ).then(
        (r) => {
            console.log(r);
            res.send("Usuário excluído com sucesso");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

exports.inserirTodos = (req, res) => {
    db.usuario.bulkCreate(usuarios).then(
        (r) => {
            console.log(r);
            res.send("Usuários inseridos com sucessso");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};


exports.recriarTabela = (req, res) => {
    db.sequelize.query("SET FOREIGN_KEY_CHECKS = 0").then(
        () => {
            db.usuario.sync({ force: true }).then(
                (r) => {
                    console.log(r);
                    res.send("Tabela usuario recriada com sucesso");
                }
            ).catch(
                (err) => {
                    res.send(erroCallback(err));
                }
            )
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    ).finally(
        () => {
            db.sequelize.query("SET FOREIGN_KEY_CHECKS = 1").then().catch();
        }
    )
};

exports.alterarTabela = (req, res) => {
    db.usuario.sync({ alter: true }).then(
        (r) => {
            console.log(r);
            res.send("Tabela usuário alterada com sucesso");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

// incrementar vendas
// incrementar trocas
// ou remover estes campos de usuário porque a ação de finalizar pode
// produzir resultados falsos por usuários desonestos.

let usuarios = [
    {
        //"id": 1,
        "nome": "João",
        "sobrenome": "Soares",
        "email": "joaosoares@example.com",
        "cpf": "12345678901",
        "senha": "senha1",
        "telefone": "123456789",
        "foto": null,
        //"vendas": 0,
        //"trocas": 0,
        //"suspenso": 0,
        //"motivo_suspensao": null
    },
    {
        //"id": 2,
        "nome": "Ursula",
        "sobrenome": "Silva",
        "email": "Ursulasilva@example.com",
        "cpf": "23456789012",
        "senha": "senha2",
        "telefone": "234567890",
        "foto": null,
        //"vendas": 0,
        //"trocas": 0,
        //"suspenso": 0,
        //"motivo_suspensao": null
    },
    {
        //"id": 3,
        "nome": "Paulo",
        "sobrenome": "Gomes",
        "email": "paulogomex@example.com",
        "cpf": "34567890123",
        "senha": "senha3",
        "telefone": "345678901",
        "foto": null,
        //"vendas": 0,
        //"trocas": 0,
        //"suspenso": 0,
        //"motivo_suspensao": null
    },
    {
        //"id": 4,
        "nome": "Matias",
        "sobrenome": "Saadhak",
        "email": "matiassaadhak@example.com",
        "cpf": "45678901234",
        "senha": "senha4",
        "telefone": "456789012",
        "foto": null,
        //"vendas": 0,
        //"trocas": 0,
        //"suspenso": 0,
        //"motivo_suspensao": null
    },
    {
        //"id": 5,
        "nome": "Erick",
        "sobrenome": "Santos",
        "email": "ericksantos@example.com",
        "cpf": "56789012345",
        "senha": "senha5",
        "telefone": "567890123",
        "foto": null,
        //"vendas": 0,
        //"trocas": 0,
        //"suspenso": 0,
        //"motivo_suspensao": null
    },
    {
        //"id": 6,
        "nome": "cauan",
        "sobrenome": "Pereira",
        "email": "cauanpereira@example.com",
        "cpf": "67890123456",
        "senha": "senha6",
        "telefone": "678901234",
        "foto": null,
        //"vendas": 0,
        //"trocas": 0,
        //"suspenso": 0,
        //"motivo_suspensao": null
    },
    {
        //"id": 7,
        "nome": "Felipe",
        "sobrenome": "Basso",
        "email": "felipebasso@example.com",
        "cpf": "78901234567",
        "senha": "senha7",
        "telefone": "789012345",
        "foto": null,
        //"vendas": 0,
        //"trocas": 0,
        //"suspenso": 0,
        //"motivo_suspensao": null
    },
    {
        //"id": 8,
        "nome": "Arthur",
        "sobrenome": "Vieira",
        "email": "arthurvieira@example.com",
        "cpf": "89012345678",
        "senha": "senha8",
        "telefone": "890123456",
        "foto": null,
        //"vendas": 0,
        //"trocas": 0,
        //"suspenso": 0,
        //"motivo_suspensao": null
    },
    {
        //"id": 9,
        "nome": "Bryan",
        "sobrenome": "Luna",
        "email": "bryanluna@example.com",
        "cpf": "90123456789",
        "senha": "senha9",
        "telefone": "901234567",
        "foto": null,
        //"vendas": 0,
        //"trocas": 0,
        //"suspenso": 0,
        //"motivo_suspensao": null
    },
    {
        //"id": 10,
        "nome": "Gustavo",
        "sobrenome": "Rossi",
        "email": "gustavorossi@example.com",
        "cpf": "69821304568",
        "senha": "senha10",
        "telefone": "89542136",
        "foto": null,
        //"vendas": 0,
        //"trocas": 0,
        //"suspenso": 0,
        //"motivo_suspensao": null
    }
];