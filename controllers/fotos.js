const db = require('../models');
const { erroCallback } = require('../utils/erroCallback')

exports.getFotosById = (req, res) => {
    db.fotos.findByPk(req.params.id).then(
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

//exports.getFotosPorIdDePublicacao = {};

exports.getTodosFotos = (req, res) => {
    db.fotos.findAll().then(
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

exports.cadastrarFotos = (req, res) => {
    db.fotos.create(
        {
            //id: req.body.id,
	    	foto1: req.body.foto1,
            foto2: req.body.foto2,
            foto3: req.body.foto3,
            foto4: req.body.foto4,
            foto5: req.body.foto5,
            foto6: req.body.foto6,
        }
    ).then(
        (r) => {
            console.log(r);
            res.send("Foto(s) cadastradas com sucesso");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

exports.setFotos = (req, res) => {
    db.fotos.update(
        {
            foto1: req.body.foto1,
            foto2: req.body.foto2,
            foto3: req.body.foto3,
            foto4: req.body.foto4,
            foto5: req.body.foto5,
            foto6: req.body.foto6,
        }, {
            where: {
                id: req.body.id
            }
        }
    ).then(
        (r) => {
            console.log(r);
            res.send("Foto(s) atualizadas com sucesso");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

exports.excluirFotos = (req, res) => {
    db.fotos.destroy(
        {
            where: {
                id: req.body.id
            }
        }
    ).then(
        (r) => {
            console.log(r);
            res.send("Foto(s) excluídas com sucessso");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err))
        }
    )
};

exports.limparTodos = (req, res) => {
    db.sequelize.query("SET FOREIGN_KEY_CHECKS = 0").then(
        () => {
            db.fotos.destroy(
                {
                    truncate: true
                }
            ).then(
                (r) => {
                    console.log(r);
                    res.send("Todas as fotos excluídas com sucesso");
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

/*exports.inserirTodos = (req, res) => {
    db.fotos.bulkCreate(fotos).then(
        (r) => {
            //console.log(r);
            res.send("Fotos inseridas com sucesso");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};*/

exports.inserirTodos = (req, res) => {
    db.fotos.bulkCreate(data.fotos).then(
        (r) => {
            //console.log(r);
            res.json({ msg: "Fotos inseridas com sucesso" });
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
            db.fotos.sync({ force: true }).then(
                (r) => {
                    console.log(r);
                    res.send("Tabela fotos recriada com sucesso");
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
    db.fotos.sync({ alter: true }).then(
        (r) => {
            console.log(r);
            res.send("Tabela fotos alterada com sucesso");
        }
    ).catch(
        (err) => {
            res.send(erroCallback(err));
        }
    )
};

const data = require('../tests/data');
/*const fotos = [
    {
        //"id": 1,
        "foto1": "f1.jpg",
        "foto2": "f2.jpg",
        "foto3": "f3.jpg",
        "foto4": "f4.jpg",
        "foto5": "f5.jpg",
        "foto6": "f6.jpg"
    },
    {
        //"id": 2,
        "foto1": "f7.jpg",
        "foto2": "f8.jpg",
        "foto3": "f9.jpg",
        "foto4": "f10.jpg",
        "foto5": "f11.jpg",
        "foto6": "f12.jpg"
    },
    {
        //"id": 3,
        "foto1": "f13.jpg",
        "foto2": "f14.jpg",
        "foto3": "f15.jpg",
        "foto4": "f16.jpg",
        "foto5": "f17.jpg",
        "foto6": "f18.jpg"
    },
    {
        //"id": 4,
        "foto1": "f19.jpg",
        "foto2": "f20.jpg",
        "foto3": "f21.jpg",
        "foto4": "f22.jpg",
        "foto5": "f23.jpg",
        "foto6": "f24.jpg"
    },
    {
        //"id": 5,
        "foto1": "f25.jpg",
        "foto2": "f26.jpg",
        "foto3": "f27.jpg",
        "foto4": "f28.jpg",
        "foto5": "f29.jpg",
        "foto6": "f30.jpg"
    },
    {
        //"id": 6,
        "foto1": "f31.jpg",
        "foto2": "f32.jpg",
        "foto3": "f33.jpg",
        "foto4": "f34.jpg",
        "foto5": "f35.jpg",
        "foto6": "f36.jpg"
    },
    {
        //"id": 7,
        "foto1": "publicacao-7-1.png",
        "foto2": "f38.jpg",
        "foto3": "f39.jpg",
        "foto4": "f40.jpg",
        "foto5": "f41.jpg",
        "foto6": "f42.jpg"
    },
    {
        //"id": 8,
        "foto1": "publicacao-8-1.jpg",
        "foto2": "f44.jpg",
        "foto3": "f45.jpg",
        "foto4": "f46.jpg",
        "foto5": "f47.jpg",
        "foto6": "f48.jpg"
    },
    {
        //"id": 9,
        "foto1": "publicacao-9-1.jpg",
        "foto2": "f50.jpg",
        "foto3": "f51.jpg",
        "foto4": "f52.jpg",
        "foto5": "f53.jpg",
        "foto6": "f54.jpg"
    },
    {
        //"id": 10,
        "foto1": "publicacao-10-1.jpeg",
        "foto2": "f56.jpg",
        "foto3": "f57.jpg",
        "foto4": "f58.jpg",
        "foto5": "f59.jpg",
        "foto6": "f60.jpg"
    }
];*/