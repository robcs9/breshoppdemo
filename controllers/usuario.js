const db = require("../models");

exports.getTodosUsuario = async (req, res) => {
    const busca = await db.usuario.findAll();
    if(busca === null) {
        console.log('Nenhum usuário encontrado.');
        res.sendStatus(400);
    } else {
        res.json(busca);
    }
};

exports.getUsuarioPorId = async (req, res) => {
    const busca = await db.usuario.findByPk(req.params.id);
    if(busca === null) {
        console.log('Usuário não encontrado.');
        res.sendStatus(400);
    } else {
        res.json(busca);
    }
};

exports.getUsuarioPorEmail = async (req, res) => {
    const busca = await db.usuario.findOne({
        where: {
            email: req.params.email
        }
    });
    
    if(busca === null) {
        console.log('Usuário não encontrado.');
        res.sendStatus(400);
    } else {
        res.json(busca);
    }
};

exports.cadastrarUsuario = async (req, res) => {
    const criar = await db.usuario.create(
        {
            id: req.body.id,
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            cpf: req.body.cpf,
            senha: req.body.senha,
            telefone: req.body.telefone,
            foto: req.body.foto,
            vendas: 0,
            trocas: 0,
            suspenso: 0,
            motivo_suspensao: req.body.motivo_suspensao
        }
    );
    if (criar === null) {
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }
};

exports.setUsuario = async (req, res) => {
    const atualizacao = await db.usuario.update(
        {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            //email: req.body.email,
            //cpf: req.body.cpf,
            senha: req.body.senha,
            telefone: req.body.telefone,
            foto: req.body.foto,
            //vendas: 0,
            //trocas: 0,
            //suspenso: 0,
            //motivo_suspensao: req.body.motivo_suspensao
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

exports.finalizarPublicacao = async (req, res) => {
    const finalizacao = await db.publicacao.update({
        finalizada: 1
    }, {
        where: {
            id: req.body.id
        }
    });
};

exports.limparTodos = async (req, res) => {
    const limpar = await db.usuario.destroy(
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
    const insercao = await db.usuario.bulkCreate(usuarios);
    if (insercao === null) {
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }
};


exports.recriarTabela = async (req, res) => {
    const recriacao = await db.usuario.sync({ force: true });
    if (recriacao) {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
};

exports.alterarTabela = async (req, res) => {
    const alteracao = await db.usuario.sync({ alter: true });
    if (alteracao) {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
};

// incrementar vendas
// incrementar trocas
// ou remover estes campos de usuário porque a ação de finalizar pode
// produzir resultados falsos por usuários desonestos.

let usuarios = [
    {
        "id": 1,
        "nome": "João",
        "sobrenome": "Soares",
        "email": "joaosoares@example.com",
        "cpf": "12345678901",
        "senha": "senha1",
        "telefone": "123456789",
        "foto": null,
        "vendas": 0,
        "trocas": 0,
        "id_publicacoes": 1,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id": 2,
        "nome": "Ursula",
        "sobrenome": "Silva",
        "email": "Ursulasilva@example.com",
        "cpf": "23456789012",
        "senha": "senha2",
        "telefone": "234567890",
        "foto": null,
        "vendas": 0,
        "trocas": 0,
        "id_publicacoes": 2,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id": 3,
        "nome": "Paulo",
        "sobrenome": "Gomes",
        "email": "paulogomex@example.com",
        "cpf": "34567890123",
        "senha": "senha3",
        "telefone": "345678901",
        "foto": null,
        "vendas": 0,
        "trocas": 0,
        "id_publicacoes": 3,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id": 4,
        "nome": "Matias",
        "sobrenome": "Saadhak",
        "email": "matiassaadhak@example.com",
        "cpf": "45678901234",
        "senha": "senha4",
        "telefone": "456789012",
        "foto": null,
        "vendas": 0,
        "trocas": 0,
        "id_publicacoes": 4,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id": 5,
        "nome": "Erick",
        "sobrenome": "Santos",
        "email": "ericksantos@example.com",
        "cpf": "56789012345",
        "senha": "senha5",
        "telefone": "567890123",
        "foto": null,
        "vendas": 0,
        "trocas": 0,
        "id_publicacoes": 5,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id": 6,
        "nome": "cauan",
        "sobrenome": "Pereira",
        "email": "cauanpereira@example.com",
        "cpf": "67890123456",
        "senha": "senha6",
        "telefone": "678901234",
        "foto": null,
        "vendas": 0,
        "trocas": 0,
        "id_publicacoes": 6,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id": 7,
        "nome": "Felipe",
        "sobrenome": "Basso",
        "email": "felipebasso@example.com",
        "cpf": "78901234567",
        "senha": "senha7",
        "telefone": "789012345",
        "foto": null,
        "vendas": 0,
        "trocas": 0,
        "id_publicacoes": 7,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id": 8,
        "nome": "Arthur",
        "sobrenome": "Vieira",
        "email": "arthurvieira@example.com",
        "cpf": "89012345678",
        "senha": "senha8",
        "telefone": "890123456",
        "foto": null,
        "vendas": 0,
        "trocas": 0,
        "id_publicacoes": 8,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id": 9,
        "nome": "Bryan",
        "sobrenome": "Luna",
        "email": "bryanluna@example.com",
        "cpf": "90123456789",
        "senha": "senha9",
        "telefone": "901234567",
        "foto": null,
        "vendas": 0,
        "trocas": 0,
        "id_publicacoes": 9,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id": 10,
        "nome": "Gustavo",
        "sobrenome": "Rossi",
        "email": "gustavorossi@example.com",
        "cpf": "69821304568",
        "senha": "senha10",
        "telefone": "89542136",
        "foto": null,
        "vendas": 0,
        "trocas": 0,
        "id_publicacoes": 10,
        "suspenso": 0,
        "motivo_suspensao": null
    }
];