db = require('../models');
const { erroCallback } = require("../lib/erroCallback");

exports.login = (req, res) => {
    res.render('login');
}

exports.fazerLogin = async (req, res) => {
    const admin = await db.administrador.findOne({
        where: {
            email: req.body.email,
            senha: req.body.senha
        }
    });
    const usuario = await db.usuario.findOne({
        where: {
            email: req.body.email,
            senha: req.body.senha
        }
    });

    if(admin) {
        console.log(`Seja bem vindo, ${admin.nome}`)
        res.redirect('/')
    } else if(usuario) {
        console.log(`Seja bem vindo, ${usuario.nome}`)
        res.redirect('/')
    } else {
        console.log("Usuário/Administrador não encontrado");
        const msg = "Usuário/Administrador não encontrado";
        res.render('login', {msg});
        //res.sendStatus(400).render('login', { msg });
        
    }
};