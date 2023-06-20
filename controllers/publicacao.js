const db = require("../models");
const { Op } = require('sequelize');
const { erroCallback } = require('../lib/erroCallback');

exports.getTodosPublicacao = (req, res) => {
    db.publicacao.findAll().then(
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

exports.cadastrarPublicacao = (req, res) => {
    db.publicacao.create(
        {
            //id: req.body.id,
            id_usuario: req.body.id_usuario,
            id_categoria: req.body.id_categoria,
            titulo: req.body.titulo,
            tipo_negociacao: req.body.tipo_negociacao,
            preco: req.body.preco,
            descricao_produto: req.body.descricao_produto,
            descricao_vendedor: req.body.descricao_vendedor,
            id_fotos: req.body.id_fotos,
            //validada: 0,
            //finalizada: 0,
        }
    ).then(
        (r) => {
            console.log(r);
            res.send("Publicação cadastrada com sucesso");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

exports.getPublicacaoPorId = (req, res) => {
    db.publicacao.findByPk(req.params.id).then(
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

exports.getPublicacaoPorTitulo = (req, res) => {
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
    db.publicacao.findOne({
        where: {
            titulo: req.params.titulo
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

exports.setPublicacao = (req, res) => {
    db.publicacao.update(
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
    ).then(
        (r) => {
            console.log(r);
            res.send("Publicação atualizada com sucessso");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

exports.excluirPublicacao = (req, res) => {
    db.publicacao.destroy(
        {
            where: {
                id: req.body.id
            }
        }
    ).then(
        (r) => {
            console.log(r);
            res.send("Publicação excluída com sucesso");
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
            db.publicacao.destroy(
                {
                    truncate: true
                }
            ).then(
                (r) => {
                    console.log(r);
                    res.send("Publicações excluídas com sucessso");
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

exports.inserirTodos = (req, res) => {
    db.publicacao.bulkCreate(publicacoes).then(
        (r) => {
            console.log(r);
            res.send("Publicações inseridas com sucesso");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
    /*db.sequelize.query("SET FOREIGN_KEY_CHECKS = 0").then(
        () => {
            db.publicacao.bulkCreate(publicacoes).then(
                (r) => {
                    console.log(r);
                    res.send("Publicações inseridas com sucesso");
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
    )*/
};

exports.validarPublicacao = (req, res) => {
    db.publicacao.update(
        {
            validada: req.body.validar,
            motivo_rejeicao: req.body.motivo
        }, {
        where: {
            id: req.body.id
        }
    }
    ).then(
        (r) => {
            console.log(r);
            res.send("Publicação validada com sucesso");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

exports.recriarTabela = (req, res) => {
    db.publicacao.query("SET FOREIGN_KEYS_CHECK = 0").then(
        db.publicacao.sync({ force: true }).then(
            (r) => {
                console.log(r);
                res.send("Tabela publicacao recriada com sucesso");
            }
        ).catch(
            (err) => {
                res.send(erroCallback(err));
            }
        )
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    ).finally(
        () => {
            db.publicacao.query("SET FOREIGN_KEY_CHECKS = 1");
        }
    )
};

exports.alterarTabela = (req, res) => {
    db.publicacao.sync({ alter: true }).then(
        (r) => {
            console.log(r);
            res.send("Tabela publicacao alterada com sucesso");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

let publicacoes = [
    {
        //"id": 1,
        "id_usuario": 1,
        "id_categoria": 1,
        "id_fotos": 1,
        "titulo": "vestido g",
        "tipo_negociacao": "Venda",
        "preco": 19.99,
        "descricao_produto": "Descrição do produto 1",
        "descricao_vendedor": "Descrição do vendedor 1",
        "id_fotos": 1,
        //"validada": 1,
        //"finalizada": 0,
        //"motivo_rejeicao": null
    },
    {
        //"id": 2,
        "id_usuario": 2,
        "id_categoria": 1,
        "titulo": "saia junina P",
        "tipo_negociacao": "Venda",
        "preco": 14.99,
        "descricao_produto": "Descrição do produto 2",
        "descricao_vendedor": "Descrição do vendedor 2",
        "id_fotos": 2,
        //"validada": 1,
        //"finalizada": 0,
        //"motivo_rejeicao": null
    },
    {
        //"id": 3,
        "id_usuario": 3,
        "id_categoria": 2,
        "titulo": "compressor de pintura",
        "tipo_negociacao": "Troca",
        "preco": 159.90,
        "descricao_produto": "Descrição do produto 3",
        "descricao_vendedor": "Descrição do vendedor 3",
        "id_fotos": 3,
        //"validada": 1,
        //"finalizada": 0,
        //"motivo_rejeicao": null
    },
    {
        //"id": 4,
        "id_usuario": 4,
        "id_categoria": 2,
        "titulo": "celta 2000",
        "tipo_negociacao": "Venda",
        "preco": 8.000,
        "descricao_produto": "Descrição do produto 4",
        "descricao_vendedor": "Descrição do vendedor 4",
        "id_fotos": 4,
        //"validada": 0,
        //"finalizada": 0,
        //"motivo_rejeicao": null
    },
    {
        //"id": 5,
        "id_usuario": 5,
        "id_categoria": 3,
        "titulo": "violao",
        "tipo_negociacao": "Venda",
        "preco": 99.99,
        "descricao_produto": "Descrição do produto 5",
        "descricao_vendedor": "Descrição do vendedor 5",
        "id_fotos": 5,
        //"validada": 1,
        //"finalizada": 1,
        //"motivo_rejeicao": null
    },
    {
        //"id": 6,
        "id_usuario": 6,
        "id_categoria": 3,
        "titulo": "colecao moedas olimpicas",
        "tipo_negociacao": "Venda",
        "preco": 399.99,
        "descricao_produto": "Descrição do produto 6",
        "descricao_vendedor": "Descrição do vendedor 6",
        "id_fotos": 6,
        //"validada": 1,
        //"finalizada": 1,
        //"motivo_rejeicao": null
    },

    {
        //"id": 7,
        "id_usuario": 7,
        "id_categoria": 4,
        "titulo": "mesa rustica 4 cadeiras",
        "tipo_negociacao": "Venda",
        "preco": 200.00,
        "descricao_produto": "Descrição do produto 7",
        "descricao_vendedor": "Descrição do vendedor 7",
        "id_fotos": 7,
        //"validada": 1,
        //"finalizada": 1,
        //"motivo_rejeicao": null
    },
    {
        //"id": 8,
        "id_usuario": 8,
        "id_categoria": 4,
        "titulo": "guarda sol",
        "tipo_negociacao": "Venda",
        "preco": 25.00,
        "descricao_produto": "Descrição do produto 8",
        "descricao_vendedor": "Descrição do vendedor 8",
        "id_fotos": 8,
        //"validada": 1,
        //"finalizada": 0,
        //"motivo_rejeicao": null
    },
    {
        //"id": 9,
        "id_usuario": 9,
        "id_categoria": 5,
        "titulo": "biquine pp",
        "tipo_negociacao": "Venda",
        "preco": 7.99,
        "descricao_produto": "Descrição do produto 9",
        "descricao_vendedor": "Descrição do vendedor 9",
        "id_fotos": 9,
        //"validada": 1,
        //"finalizada": 0,
        //"motivo_rejeicao": null
    },
    {
        //"id": 10,
        "id_usuario": 10,
        "id_categoria": 5,
        "titulo": "notebook i5",
        "tipo_negociacao": "Venda",
        "preco": 800.00,
        "descricao_produto": "Descrição do produto 10",
        "descricao_vendedor": "Descrição do vendedor 10",
        "id_fotos": 10,
        //"validada": 1,
        //"finalizada": 0,
        //"motivo_rejeicao": null
    }

];