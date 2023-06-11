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

exports.setPublicacao = async (req, res) => {
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
    if(atualizacao === null) {
        res.sendStatus(400);
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