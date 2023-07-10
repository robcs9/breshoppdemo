db = require('../models');
const jwt = require('jsonwebtoken');

exports.renderLogin = (req, res) => {
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
        const msg = "Usuário/Administrador não encontrado";
        console.log(msg);
        res.render('login', {msg});
        //res.sendStatus(400).render('login', { msg });
    }
};

exports.login = (req, res, next) => {
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
}