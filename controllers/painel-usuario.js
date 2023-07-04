exports.crumbsInicio = (req, res, next) => { // tentative controller method name
    res.locals.breadcrumb = ["Painel"];
    next();
}

exports.crumbsEdicaoPerfil = (req, res, next) => {
    res.locals.breadcrumb = ["Painel", "Perfil"];
    next();
}

exports.crumbsPublicacoes = (req, res, next) => {
    res.locals.breadcrumb = ["Painel", "Publicações"];
    next();
}

exports.crumbsNovaPublicacao = (req, res, next) => {
    res.locals.breadcrumb = ["Painel", "Perfil", "Publicações", "Criar Publicação"];
    next();
}

exports.renderPainelUsuario = (req, res) => {
    
    res.render('painel-usuario');
}