db = require('../models');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const axios = require('axios');

exports.renderLogin = (req, res) => {
    res.render('login');
}

exports.fazerLogin = async (req, res) => {
    // refatorar abaixo para utilizar o fetch com a API criada
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

    if (admin) {
        console.log(`Seja bem vindo, ${admin.nome}`);
        res.redirect('/');
    } else if (usuario) {
        console.log(`Seja bem vindo, ${usuario.nome}`)
        //req.session.expires = 30;
        req.session.usuario = usuario;
        console.log(req.session);
        res.redirect('/')
    } else {
        const msg = "Usuário/Administrador não encontrado";
        console.log(msg);
        res.render('login', { msg });
        //res.sendStatus(400).render('login', { msg });
    }
};

/*exports.login = (req, res, next) => {
    const email = req.body.email;
    const senha = req.body.senha;
    const usuario = { email: email, senha: senha };
    const accessToken = jwt.sign(usuario, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken: accessToken });
    next();
};

exports.autenticarToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, usuario) => {
        if (err) return res.sendStatus(403);
        req.usuario = usuario
        next();
    });
}

exports.procurarUsuario = async (req, res) => {
    const admin = await fetch('http://localhost:3000/api/admin/buscar-admin', {})
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
        const msg = "Usuário/Administrador não encontrado";
        console.log(msg);
        res.render('login', {msg});
        //res.sendStatus(400).render('login', { msg });
    }
}*/

// autenticação via localStorage
/*
// Função para iniciar a sessão
function iniciarSessao (usuario) {
    localStorage.setItem('sessao', JSON.stringify(usuario));
}

// Função para encerrar a sessão
function encerrarSessao() {
    localStorage.removeItem('sessao');
}

// Função para verificar se o usuário está logado
function verificarSessao() {
    var sessao = localStorage.getItem('sessao');
    if (sessao) {
        // O usuário está logado
        var usuario = JSON.parse(sessao);
        console.log('Usuário logado:', usuario);
    } else {
        // O usuário não está logado
        console.log('Usuário não está logado.');
    }
}

// Exemplo de uso
var usuarioLogado = {
    nome: 'John Doe',
    email: 'johndoe@example.com'
};

iniciarSessao(usuarioLogado); // Iniciar a sessão
verificarSessao(); // Verificar se o usuário está logado
encerrarSessao(); // Encerrar a sessão
verificarSessao(); // Verificar se o usuário está logado novamente*/

exports.fazerLogin1 = async (req, res, next) => {
    /*if(req.session.usuario) {
        return res.redirect('http://localhost:3000');
    }*/
    try {
        const usuario = await axios.post('http://localhost:3000/api/usuario/buscar-usuario', {
            email: req.body.email
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        const admin = await axios.post('http://localhost:3000/api/admin/buscar-admin', {
            email: req.body.email
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        const u = usuario.data;
        const a = admin.data;
        if (u != null) {
            //return res.send(JSON.stringify(usuario));
            if (req.body.senha == u.senha) {
                if (u.foto == null) u.foto = "avatar.jpg";
                if (u.suspenso == null) u.suspenso = false;
                if (u.motivo_suspensao == null) u.motivo_suspensao = "";
                req.session.usuario = u;
                res.locals.session = req.session;
                return res.redirect('/painel-usuario/publicacoes')
                //return res.redirect('..');
                //return res.redirect('back');
                //return res.redirect('/painel-usuario');
            } else {
                const msg = "Senha do usuário incorreta.";
                res.locals.msg = msg;
                //console.log(msg);
                next();
            }
        } else if (a != null) {
            if (req.body.senha == a.senha) {
                req.session.admin = a;
                return res.redirect('/');
                //return res.redirect('/painel-admin');
                //return res.redirect('back');
                //return res.redirect('..');
            } else {
                const msg = "Senha do administrador incorreta.";
                res.locals.msg = msg;
                //console.log(msg);
                next();
            }
        } else if (!u && !a) {
            const msg = "Usuário/Administrador não encontrado";
            res.locals.msg = msg;
            //console.log(msg);
            next();
        }
    }
    catch (err) {
        //console.log(err);
        res.json({ msg: "Erro: " + err });
    }
}