const db = require("../models");

exports.getTodosCategoria = (req, res) => {
    db.categoria.findAll().then(
        (r) => {
            console.log(r);
            res.json(r);
        }
    ).catch(
        (err) => {
            console.log(err);
            let msg = "";
            err.errors.forEach(
                (elem) => {
                    msg += elem.message + '\n';
                }
            )
            res.send(msg);
        }
    )
};

exports.cadastrarCategoria = (req, res) => {
    db.categoria.create(
        {
            id: req.body.id,
	    	nome: req.body.nome,
        }
    ).then(
        (r) => {
            console.log(r);
            res.send("Categoria cadastrada com sucesso.");
        }
    ).catch(
        (err) => {
            console.log(err);
            let msg = "";
            err.errors.forEach(
                (elem) => {
                    msg += elem.message + '\n';
                }
            )
            res.send(msg);
        }
    )
};

exports.getCategoriaPorId = (req, res) => {
    db.categoria.findByPk(req.params.id).then(
        (r) => {
            console.log(r);
            res.json(r);
        }
    ).catch(
        (err) => {
            console.log(err);
            let msg = "";
            err.errors.forEach(
                (elem) => {
                    msg += elem.message + '\n';
                }
            )
            res.send(msg);
        }
    )
};

exports.getCategoriaPorNome = (req, res) => {
    db.categoria.findOne({
        where: {
            nome: req.params.nome
        }
    }).then(
        (r) => {
            console.log(r);
            res.json(r);
        }
    ).catch(
        (err) => {
            console.log(err);
            let msg = "";
            err.errors.forEach(
                (elem) => {
                    msg += elem.message + '\n';
                }
            )
            res.send(msg);
        }
    )
};

exports.excluirCategoria = (req, res) => {
    db.categoria.destroy(
        {
            where: {
                id: req.body.id
            }
        }
    ).then(
        (r) => {
            console.log(r);
            res.send("Categoria excluída com sucesso");
        }
    ).catch(
        (err) => {
            console.log(err);
            let msg = "";
            err.errors.forEach(
                (elem) => {
                    msg += elem.message + '\n';
                }
            )
            res.send(msg);
        }
    )
};

exports.limparTodos = (req, res) => {
    db.categoria.destroy(
        {
            truncate: true
        }
    ).then(
        (r) => {
            console.log(r);
            res.send("Categorias excluídas com sucesso");
        }
    ).catch(
        (err) => {
            console.log(err);
            let msg = "";
            err.errors.forEach(
                (elem) => {
                    msg += elem.message + '\n';
                }
            )
            res.send(msg);
        }
    )
};

exports.inserirTodos = (req, res) => {
    db.categoria.bulkCreate(categorias).then(
        (r) => {
            console.log(r);
            res.send("Categorias inseridas com sucesso");
        }
    ).catch(
        (err) => {
            console.log(err);
            let msg = "";
            err.errors.forEach(
                (elem) => {
                    msg += elem.message + '\n';
                }
            )
            res.send(msg);
        }
    )
};

exports.recriarTabela = (req, res) => {
    db.categoria.sync({ force: true }).then(
        (r) => {
            console.log(r);
            res.send("Tabela categoria recriada com sucesso");
        }
    ).catch(
        (err) => {
            console.log(err);
            let msg = "";
            err.errors.forEach(
                (elem) => {
                    msg += elem.message + '\n';
                }
            )
            res.send(msg);
        }
    )
};

exports.alterarTabela = (req, res) => {
    db.categoria.sync({ alter: true }).then(
        (r) => {
            console.log(r);
            res.send("Tabela categoria alterada com sucesso");
        }
    ).catch(
        (err) => {
            console.log(err);
            let msg = "";
            err.errors.forEach(
                (elem) => {
                    msg += elem.message + '\n';
                }
            )
            res.send(msg);
        }
    )
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