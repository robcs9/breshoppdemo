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
// Breadcrumbs + Título da Tela
exports.crumbsInicio = (req, res, next) => {
    //res.locals.breadcrumb = ["Painel"];
    res.locals.breadcrumb = [
        {titulo: "Home", rota: "/"},
        {titulo: "Painel", rota: "/painel-usuario"}
    ];
    next();
}

exports.crumbsPerfil = (req, res, next) => {
    //res.locals.breadcrumb = ["Painel", "Perfil"];
    res.locals.breadcrumb = [
        {titulo: "Home", rota: "/"},
        {titulo: "Painel", rota: "/painel-usuario"},
        {titulo: "Perfil", rota: "/painel-usuario/perfil"}
    ];
    next();
}

exports.crumbsPublicacoes = (req, res, next) => {
    //res.locals.breadcrumb = ["Painel", "Publicações"];
    res.locals.breadcrumb = [
        {titulo: "Home", rota: "/"},
        {titulo: "Painel", rota: "/painel-usuario"},
        {titulo: "Publicações", rota: "/painel-usuario/publicacoes"},
    ];
    next();
}

exports.crumbsNovaPublicacao = (req, res, next) => {
    //res.locals.breadcrumb = ["Painel", "Perfil", "Publicações", "Criar Publicação"];
    res.locals.breadcrumb = [
        {titulo: "Home", rota: "/"},
        {titulo: "Painel", rota: "/painel-usuario"},
        {titulo: "Perfil", rota: "/painel-usuario/perfil"},
        {titulo: "Publicações", rota: "/painel-usuario/publicacoes"},
        {titulo: "Criar Publicação", rota: "/painel-usuario/nova-publicacao"},
    ];
    next();
}

exports.crumbsEditarPublicacao = (req, res, next) => {
    //res.locals.breadcrumb = ["Painel", "Perfil", "Publicações", "Editar Publicação"];
    res.locals.breadcrumb = [
        {titulo: "Home", rota: "/"},
        {titulo: "Painel", rota: "/painel-usuario"},
        {titulo: "Perfil", rota: "//painel-usuarioperfil"},
        {titulo: "Publicações", rota: "/painel-usuario/publicacoes"},
        {titulo: "Editar Publicação", rota: "/painel-usuario/editar-publicacao"},
    ];
    next();
}

exports.renderPainelUsuario = (req, res) => {
    res.render('painel-usuario');
}

exports.autenticarUsuario = (req, res, next) => {
    if(req.session.usuario) {
        console.log("Bem vindo " + req.session.usuario);
        next();
    } else {
        console.log("Faça login para acessar o painel de usuário");
        res.redirect('login');
    }
}