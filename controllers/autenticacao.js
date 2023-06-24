const db = require("../models");
const { erroCallback } = require("../lib/erroCallback");

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
        console.log("Usuário/Administrador não encontrado")
        res.sendStatus(400);
    }
};


// Refatorar com EJS?
exports.registrarUsuario = async (req, res) => {
    const novoUsuario = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        cpf: req.body.cpf,
        senha: req.body.senha,
        telefone: req.body.telefone,
    }
    // checar também se a checkbox dos termos foi marcada
    
    if(req.body.confirmacaoSenha != novoUsuario.senha) {
        console.log("A senha e a confirmação são diferentes.");
        res.redirect('/register.html');
    } else {
        fetch('/api/usuario/cadastrar-usuario', {
            method: "POST",
            body: novoUsuario
        }).then(
            console.log("Novo")
        );
    }
}