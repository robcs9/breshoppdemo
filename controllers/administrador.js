const db = require("../models");
const { erroCallback } = require("../utils/erroCallback");

exports.getTodosAdmins = (req, res) => {
    db.administrador.findAll().then(
        (r) => {
            //console.log(r);
            res.json(r);
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

exports.getAdminPorId = (req, res) => {
    db.administrador.findByPk(req.params.id).then(
        (r) => {
            //console.log(r);
            res.json(r);
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

exports.getAdminIdPorEmail = (req, res) => {
    db.administrador.findOne({ where: { email: req.params.email } }).then(
        (r) => {
            //console.log(r);
            res.json(r);
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

exports.getAdminPorEmailForm = (req, res) => {
    db.administrador.findOne({ where: { email: req.body.email } }).then(
        (r) => {
            //console.log(r);
            res.json(r);
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

exports.cadastrarAdmin = (req, res) => {
    db.administrador.create(
        {
            //id: req.body.id,
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            senha: req.body.senha
        }
    ).then(
        (r) => {
            //console.log(r);
            res.send("Administrador inserido com sucesso.");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
    //.finally(
    //    () => console.log("OK")
    //);

    // v1
    //try {
    //    const criar = await db.administrador.create(
    //        {
    //            id: req.body.id,
    //            nome: req.body.nome,
    //            sobrenome: req.body.sobrenome,
    //            email: req.body.email,
    //            senha: req.body.senha
    //        }
    //    )
    //    console.log(criar);
    //    return res.send("Administrador inserido com sucesso.");
    //    //return res.send(criar)
    //} catch (err) {
    //    console.log(err);
    //    let errMsg = "";
    //    err.errors.forEach(
    //        (elem) => {
    //            errMsg += elem.message + '\n';
    //        }
    //    )
    //    res.send(errMsg);
    //};

    // v2
    //const criar = await db.administrador.create(
    //    {
    //        id: req.body.id,
    //    	nome: req.body.nome,
    //    	sobrenome: req.body.sobrenome,
    //    	email: req.body.email,
    //    	senha: req.body.senha
    //    }
    //).then(
    //    (r)  => {return res.send(r)}
    //).catch(
    //    (r)  => {return res.send(r)}
    //);

    //return res.send(criar);
    //if(criar === null) {
    //    return res.sendStatus(500);
    //} else {
    //    return res.sendStatus(200);
    //}
};

exports.setAdmin = (req, res) => {
    db.administrador.update(
        {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            senha: req.body.senha
        }, {
        where: {
            id: req.body.id
        }
    }).then(
        (r) => {
            //console.log(r);
            res.send("Administrador atualizado com sucesso.");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

exports.excluirAdmin = (req, res) => {
    db.administrador.destroy(
        {
            where: {
                id: req.body.id
            }
        }
    ).then(
        (r) => {
            //console.log(r);
            res.send("Administrador excluído com sucesso.");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

exports.limparTodos = (req, res) => {
    db.administrador.destroy(
        {
            truncate: true
        }
    ).then(
        (r) => {
            //console.log(r);
            res.send("Todos administradores excluídos com sucesso.");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

/*exports.inserirTodos = (req, res) => {
    db.administrador.bulkCreate(administradores).then(
        (r) => {
            //console.log(r);
            res.send("Administradores inseridos com sucesso.");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};*/

exports.inserirTodos = (req, res) => {
    db.administrador.bulkCreate(data.administrador).then(
        (r) => {
            //console.log(r);
            res.json({ msg: "Administradores inseridos com sucesso" });
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

// Criar nova função para popular todas as tabelas que use o bulkCreate + include


exports.validarPublicacao = (req, res) => {
    db.publicacao.update(
        {
            validada: req.body.validar,
            motivo_rejeicao: req.body.motivo
        }, {
        where: {
            id: req.body.id
        }
    }).then(
        (r) => {
            //console.log(r);
            res.send("Publicação validada com sucesso.");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

exports.suspenderUsuario = (req, res) => {
    db.usuario.update(
        {
            suspenso: req.body.suspender,
            motivo_suspensao: req.body.motivo
        }, {
        where: {
            id: req.body.id
        }
    }).then(
        (r) => {
            //console.log(r);
            res.send("Usuário suspendido com sucesso.");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

exports.recriarTabela = (req, res) => {
    db.administrador.sync({ force: true }).then(
        (r) => {
            //console.log(r);
            res.send("Tabela administrador recriada com sucesso.");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

exports.alterarTabela = (req, res) => {
    db.administrador.sync({ alter: true }).then(
        (r) => {
            //console.log(r);
            res.send("Tabela administrador alterada com sucesso.");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

const data = require('../tests/data');

// Dados antigos
/*let administradores = [
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
];*/