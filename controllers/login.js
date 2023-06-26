db = require('../models');

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
        const msg = "Usuário/Administrador não encontrado";
        console.log(msg);
        res.render('login', {msg});
        //res.sendStatus(400).render('login', { msg });
    }
};