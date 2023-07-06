// Perfil
exports.getUsuario = (req, res, next) => {
    // consultar a id do usuário através da sessão ativa
    let id = 5;
    fetch(`http://localhost:3000/api/usuario/id/${id}`).then(
        data => data.json()
    ).then(
        (usuario) => {
            res.locals.usuario = usuario;
            next();
        }
    ).catch(
        err => console.log(err)
    )
}
// Crumbs + Título da Tela
exports.crumbsInicio = (req, res, next) => {
    res.locals.breadcrumb = ["Painel"];
    next();
}

exports.crumbsPerfil = (req, res, next) => {
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

exports.crumbsEditarPublicacao = (req, res, next) => {
    res.locals.breadcrumb = ["Painel", "Perfil", "Publicações", "Editar Publicação"];
    next();
}

exports.renderPainelUsuario = (req, res) => {
    res.render('painel-usuario');
}