const axios = require('axios');
// Perfil
exports.getUsuario = (req, res, next) => {
    // consultar a id do usuário através da sessão ativa
    //return res.send(req.session.usuario)
    res.locals.usuario = req.session.usuario;
    next();
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
        {titulo: "Perfil", rota: "/painel-usuario/perfil"},
        {titulo: "Publicações", rota: "/painel-usuario/publicacoes"},
        {titulo: "Editar Publicação", rota: "/painel-usuario/editar-publicacao"},
    ];
    next();
}

exports.autenticarUsuario = (req, res, next) => {
    if(req.session.usuario) {
        console.log("Bem vindo " + req.session.usuario.nome);
        next();
    } else {
        console.log("Faça login para acessar o painel de usuário");
        res.redirect('/login');
    }
}

exports.renderPainelUsuario = (req, res) => {
    res.render('painel-usuario');
}

exports.renderPerfil = (req, res) => {
    res.render('perfil');
}

exports.renderPublicacoes = (req, res) => {
    res.render('publicacoes');
}

exports.renderNovaPublicacao = (req, res) => {
    res.render('nova-publicacao');
}

exports.renderEditarPublicacao = (req, res) => {
    res.render('editar-publicacao');
}

exports.getPublicacoesDeUsuario = async (req, res, next) => {
    const url = `http://localhost:3000/api/usuario/id/${res.locals.usuario.id}`;
    const usuario = await axios.get(url);
    res.locals.usuario = usuario.data;
    next();
}

exports.listarCategorias = (req, res, next) => {
    fetch('http://localhost:3000/api/categoria').then(
        (data) => data.json()
    ).then(
        (data) => {
            res.locals.categorias = data;
            /*res.render('home', {
                categorias: data
            });*/
            next();
        }
    ).catch(
        //err => res.render('home', erroCallback(err))
    );
}