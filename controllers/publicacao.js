const db = require("../models");
const { Op } = require('sequelize');

exports.getTodosPublicacao = async (req, res) => {
    const busca = await db.publicacao.findAll();
    if(busca === null) {
        console.log('Nenhuma publicação encontrada.');
        res.sendStatus(400);
    } else {
        res.json(busca);
    }
};

exports.cadastrarPublicacao = async (req, res) => {
    const criar = await db.publicacao.create(
        {
            id: req.body.id,
            id_usuario: req.body.id_usuario,
            id_categoria: req.body.id_categoria,
            titulo: req.body.titulo,
            tipo_negociacao: req.body.tipo_negociacao,
            preco: req.body.preco,
            descricao_produto: req.body.descricao_produto,
            descricao_vendedor: req.body.descricao_vendedor,
            id_fotos: req.body.id_fotos,
            validada: 0,
            finalizada: 0,
        }
    );
    if (criar === null) {
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }
};

exports.getPublicacaoPorId = async (req, res) => {
    const busca = await db.publicacao.findByPk(req.params.id);
    if(busca === null) {
        console.log('Publicação não encontrada.');
        res.sendStatus(400);
    } else {
        res.json(busca);
    }
};

exports.getPublicacaoPorTitulo = async (req, res) => {
    // Implementação incompleta de fuzzy search 
    //const str = req.params.titulo;
    //const palavras = str.split(/[\s,]+/);
    //
    //const busca = await db.publicacao.findAll({
    //    where: {
    //        titulo: {
    //            [Op.like]: "%" + palavras[0] + "%"
    //        }
    //    }
    //});
    const busca = await db.publicacao.findOne({
        where: {
            titulo: req.params.titulo
        }
    })
    if(busca === null) {
        console.log('Nenhuma publicação não encontrada.');
        res.sendStatus(400);
    } else {
        res.json(busca);
    }
};

exports.setPublicacao = async (req, res) => {
    const atualizacao = await db.publicacao.update(
        {
            id_categoria: req.body.id_categoria,
            titulo: req.body.titulo,
            tipo_negociacao: req.body.tipo_negociacao,
            preco: req.body.preco,
            descricao_produto: req.body.descricao_produto,
            descricao_vendedor: req.body.descricao_vendedor,
            //id_fotos:req.body.id_fotos,
            //validada:req.body.validada,
            //finalizada:req.body.finalizada,
            //motivo_rejeicao:req.body.motivo_rejeicao
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

exports.excluirPublicacao = async (req, res) => {
    const exclusao = await db.publicacao.destroy(
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
    const limpar = await db.publicacao.destroy(
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
    const insercao = await db.publicacao.bulkCreate(publicacoes);
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

exports.recriarTabela = async (req, res) => {
    const recriacao = await db.publicacao.sync({ force: true });
    if (recriacao) {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
};

exports.alterarTabela = async (req, res) => {
    const alteracao = await db.publicacao.sync({ alter: true });
    if (alteracao) {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
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