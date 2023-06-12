const db = require('../models');

// GET /:id
exports.getFotosById = async (req, res) => {
    //const leitura = await db.publicacao.findOne( { where: { id} });
    const leitura = await db.fotos.findByPk();
};
//exports.getFotosPorIdPublicidade = ;

exports.getTodasFotos = async (req, res) => {
    const leitura = await db.fotos.findOne({
        where: {
            
        }
    });
    if(leitura) {
        res.json(leitura);
    } else {
        res.sendStatus(400);
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

const fotos = [
    {
        "id": 1,
        "foto1": "f1.jpg",
        "foto2": "f2.jpg",
        "foto3": "f3.jpg",
        "foto4": "f4.jpg",
        "foto5": "f5.jpg",
        "foto6": "f6.jpg"
    },
    {
        "id": 2,
        "foto1": "f7.jpg",
        "foto2": "f8.jpg",
        "foto3": "f9.jpg",
        "foto4": "f10.jpg",
        "foto5": "f11.jpg",
        "foto6": "f12.jpg"
    },
    {
        "id": 3,
        "foto1": "f13.jpg",
        "foto2": "f14.jpg",
        "foto3": "f15.jpg",
        "foto4": "f16.jpg",
        "foto5": "f17.jpg",
        "foto6": "f18.jpg"
    },
    {
        "id": 4,
        "foto1": "f19.jpg",
        "foto2": "f20.jpg",
        "foto3": "f21.jpg",
        "foto4": "f22.jpg",
        "foto5": "f23.jpg",
        "foto6": "f24.jpg"
    },
    {
        "id": 5,
        "foto1": "f25.jpg",
        "foto2": "f26.jpg",
        "foto3": "f27.jpg",
        "foto4": "f28.jpg",
        "foto5": "f29.jpg",
        "foto6": "f30.jpg"
    },
    {
        "id": 6,
        "foto1": "f31.jpg",
        "foto2": "f32.jpg",
        "foto3": "f33.jpg",
        "foto4": "f34.jpg",
        "foto5": "f35.jpg",
        "foto6": "f36.jpg"
    },
    {
        "id": 7,
        "foto1": "f37.jpg",
        "foto2": "f38.jpg",
        "foto3": "f39.jpg",
        "foto4": "f40.jpg",
        "foto5": "f41.jpg",
        "foto6": "f42.jpg"
    },
    {
        "id": 8,
        "foto1": "f43.jpg",
        "foto2": "f44.jpg",
        "foto3": "f45.jpg",
        "foto4": "f46.jpg",
        "foto5": "f47.jpg",
        "foto6": "f48.jpg"
    },
    {
        "id": 9,
        "foto1": "f49.jpg",
        "foto2": "f50.jpg",
        "foto3": "f51.jpg",
        "foto4": "f52.jpg",
        "foto5": "f53.jpg",
        "foto6": "f54.jpg"
    },
    {
        "id": 10,
        "foto1": "f55.jpg",
        "foto2": "f56.jpg",
        "foto3": "f57.jpg",
        "foto4": "f58.jpg",
        "foto5": "f59.jpg",
        "foto6": "f60.jpg"
    }
];