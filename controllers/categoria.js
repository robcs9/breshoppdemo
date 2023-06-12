const db = require("../models");

exports.criarPublicacao = async (req, res) => {
    const criar = await db.administrador.create(
        {
            id: req.body.id,
	    	nome: req.body.nome,
	    	sobrenome: req.body.sobrenome,
	    	email: req.body.email,
	    	senha: req.body.senha
        }
    );
    if(criar === null) {
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }
};

exports.excluirPublicacao = async (req, res) => {
    const exclusao = await db.administrador.destroy(
        {
            where: {
                id: req.body.id
            }
        }
    );
    if(exclusao === null) {
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
    if(limpar === null) {
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }
};

exports.inserirTodos = async (req, res) => {
    const insercao = await db.administrador.bulkCreate(administradores);
    if(insercao === null) {
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
    if(validacao === null) {
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
    if(suspensao === null) {
        res.sendStatus(400);
    } else {
        res.sendStatus(200);
    }
};

exports.recriarTabela = async (req, res) => {
    const recriacao = await db.administrador.sync({ force: true });
    if(recriacao) {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
};

exports.alterarTabela = async (req, res) => {
    const alteracao = await db.administrador.sync({ alter: true });
    if(alteracao) {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
};

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