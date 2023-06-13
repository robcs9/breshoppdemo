const db = require("../models");

exports.getTodosCategoria = async (req, res) => {
    const busca = await db.categoria.findAll();
    if(busca === null) {
        console.log('Nenhuma categoria encontrada.');
        res.sendStatus(400);
    } else {
        res.json(busca);
    }
};

exports.cadastrarCategoria = async (req, res) => {
    const criar = await db.categoria.create(
        {
            id: req.body.id,
	    	nome: req.body.nome,
        }
    );
    if(criar === null) {
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }
};

exports.getCategoriaPorId = async (req, res) => {
    const leitura = await db.categoria.findByPk(req.params.id)
    if(leitura) {
        res.json(leitura);
    } else {
        res.sendStatus(400)
    }
};

exports.getCategoriaPorNome = async (req, res) => {
    const leitura = await db.categoria.findOne({
        where: {
            nome: req.params.nome
        }
    })
    if(leitura) {
        res.json(leitura);
    } else {
        res.sendStatus(400)
    }
};

exports.excluirCategoria = async (req, res) => {
    const exclusao = await db.categoria.destroy(
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
    const limpar = await db.categoria.destroy(
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
    const insercao = await db.categoria.bulkCreate(categorias);
    if(insercao === null) {
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }
};

exports.recriarTabela = async (req, res) => {
    const recriacao = await db.categoria.sync({ force: true });
    if(recriacao) {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
};

exports.alterarTabela = async (req, res) => {
    const alteracao = await db.categoria.sync({ alter: true });
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