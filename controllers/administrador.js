const db = require("../models");

exports.getTodosAdmins = async (req, res) => {
    db.administrador.findAll().then(
        (r) => {
            console.log(r);
            res.json(r);
        }
    ).catch(
        (err) => {
            console.log(err);
            let errMsg = "";
            err.errors.forEach(
                (elem) => {
                    errMsg += elem.message + '\n';
                }
            )
            res.send(errMsg);
        }
    ).finally(
        () => console.log("OK")
    );
    /*const busca = await db.administrador.findAll();
    if (busca === null) {
        console.log('Nenhum administrador encontrado.');
        res.sendStatus(400);
    } else {
        res.json(busca);
    }*/
};

exports.getAdminPorId = async (req, res) => {
    const busca = await db.administrador.findByPk(req.params.id);
    if (busca === null) {
        console.log('Administrador não encontrado.');
        res.sendStatus(400);
    } else {
        res.json(busca);
    }
};

exports.getAdminIdPorEmail = async (req, res) => {
    const busca = await db.administrador.findOne({ where: { email: req.params.email } });
    if (busca === null) {
        console.log('Administrador não encontrado.');
        res.sendStatus(400);
    } else {
        res.json(busca.id);
    }
};

exports.getAdminPorEmailForm = async (req, res) => {
    const busca = await db.administrador.findOne({ where: { email: req.body.email } });
    if (busca === null) {
        res.sendStatus(400);
    } else {
        res.json(busca);
    }
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
            console.log(r);
            return res.send("Administrador inserido com sucesso.");
        }
    ).catch(
        (err) => {
            console.log(err);
            let errMsg = "";
            err.errors.forEach(
                (elem) => {
                    errMsg += elem.message + '\n';
                }
            )
            res.send(errMsg);
        }
    ).finally(
        () => console.log("OK")
    );

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

exports.setAdmin = async (req, res) => {
    const atualizacao = await db.administrador.update(
        {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            senha: req.body.senha
        }, {
        where: {
            id: req.body.id
        }
    }
    );
    if (atualizacao === null) {
        res.sendStatus(400);
    } else {
        res.sendStatus(200);
    }
};

exports.excluirAdmin = async (req, res) => {
    const exclusao = await db.administrador.destroy(
        {
            where: {
                id: req.body.id
            }
        }
    );
    if (exclusao === null) {
        res.sendStatus(400);
    } else {
        res.sendStatus(200);
    }
};

exports.limparTodos = async (req, res) => {
    const limpar = await db.administrador.destroy(
        {
            truncate: true
        }
    );
    if (limpar === null) {
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }
};

exports.inserirTodos = async (req, res) => {
    const insercao = await db.administrador.bulkCreate(administradores);
    if (insercao === null) {
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }
};

exports.validarPublicacao = async (req, res) => {
    const validacao = await db.publicacao.update(
        {
            validada: req.body.validar,
            motivo_rejeicao: req.body.motivo
        }, {
        where: {
            id: req.body.id
        }
    }
    );
    if (validacao === null) {
        res.sendStatus(400);
    } else {
        res.sendStatus(200);
    }
};

exports.suspenderUsuario = async (req, res) => {
    const suspensao = await db.usuario.update(
        {
            suspenso: req.body.suspender,
            motivo_suspensao: req.body.motivo
        }, {
        where: {
            id: req.body.id
        }
    }
    );
    if (suspensao === null) {
        res.sendStatus(400);
    } else {
        res.sendStatus(200);
    }
};

exports.recriarTabela = async (req, res) => {
    const recriacao = await db.administrador.sync({ force: true });
    if (recriacao) {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
};

exports.alterarTabela = async (req, res) => {
    const alteracao = await db.administrador.sync({ alter: true });
    if (alteracao) {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
};

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