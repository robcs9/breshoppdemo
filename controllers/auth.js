//require('login');

exports.autenticarUsuario = (req, res, next) => {
    if(req.session.usuario) {
        console.log("Bem vindo " + req.session.usuario);
        next();
    } else {
        console.log("Faça login para acessar esta área do site");
        res.redirect('login');
    }
}

// jwt
exports.fazerLogin2 = (req, res, next) => {

}
// passport
exports.fazerLogin3 = (req, res, next) => {

}