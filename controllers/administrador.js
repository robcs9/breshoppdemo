const administrador = require("../models/administrador");
const db = require("../models");

exports.getTodosAdmins = async (req, res) => {
    const busca = await db.administrador.findAll();
    if(busca === null) {
        console.log('Nenhum administrador encontrado.');
        res.sendStatus(400);
    } else {
        res.json(busca);
    }
};

exports.getAdminPorId = async (req, res) => {
    const busca = await db.administrador.findByPk(req.params.id);
    if(busca === null) {
        console.log('Administrador não encontrado.');
        res.sendStatus(400);
    } else {
        res.json(busca);
    }
};

exports.getAdminIdPorEmail = async (req, res) => {
    const busca = await db.administrador.findOne({ where: { email: req.params.email} });
    if(busca === null) {
        console.log('Administrador não encontrado.');
        res.sendStatus(400);
    } else {
        res.json(busca.id);
    }
};
exports.getAdminPorEmailForm = async (req, res) => {
    const busca = await db.administrador.findOne({ where: { email: req.body.email } });
    if(busca === null) {
        res.sendStatus(400);
    } else {
        res.json(busca);
    }
};

exports.cadastrarAdmin = async (req, res) => {
    const criar = await db.administrador.create({
        id: req.body.id,
		nome: req.body.nome,
		sobrenome: req.body.sobrenome,
		email: req.body.email,
		senha: req.body.senha
    });
    if(criar === null) {
        res.sendStatus(500);
    } else {
        res.json(criar);
    }
};

//exports.setAdmin;
//exports.validarPublicacao;
//exports.suspenderUsuario;
//exports.excluirAdmin;