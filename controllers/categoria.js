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