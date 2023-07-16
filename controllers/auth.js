//require('login');

exports.autenticarUsuario = (req, res, next) => {
    if(req.session.usuario) {
        console.log("Bem vindo " + req.session.usuario.nome);
        res.locals.session = req.session;
        next();
    } else {
        console.log("Faça login para acessar esta área do site");
        res.redirect('/login');
    }
}

// jwt
exports.fazerLogin2 = (req, res, next) => {

}
// passport
exports.fazerLogin3 = (req, res, next) => {

}

exports.fazerLogout = async (req, res, next) => {
    req.session.destroy((err) => {
        if (err) {
            console.log('Erro ao destruir a sessão:', err);
            res.redirect('/painel-usuario');
        } else {
            res.redirect('/');
        }
    });
}

exports.checarAutenticacao = (req, res, next) => {
    res.locals.session = req.session;
    //return res.json(res.locals);
    next();
}