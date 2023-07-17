const axios = require('axios');
// Perfil
exports.getUsuario = (req, res, next) => {
    // consultar a id do usuário através da sessão ativa
    //return res.send(req.session.usuario)
    res.locals.usuario = req.session.usuario;
    next();
}

exports.getPublicacao = (req, res, next) => {
    if (req.session.usuario.publicacaos != null) {
        for (elem of req.session.usuario.publicacaos) {
            if (elem.id == req.params.id) {
                //publicacao = elem;
                res.locals.publicacao = elem;
                return next();
            }
        }
    }
    console.log('Publicação editável não encontrada');
    return res.redirect('/painel-usuario/publicacoes');
    /*if (Object.entries(publicacao) > 0) {
        res.locals.publicacao = publicacao;
        next();
    } else {
        console.log('Publicação editável não encontrada');
        res.redirect('/painel-usuario/publicacoes');
    }*/
}
// Breadcrumbs + Título da Tela
exports.crumbsInicio = (req, res, next) => {
    //res.locals.breadcrumb = ["Painel"];
    res.locals.breadcrumb = [
        { titulo: "Home", rota: "/" },
        { titulo: "Painel", rota: "/painel-usuario" }
    ];
    next();
}

exports.crumbsPerfil = (req, res, next) => {
    //res.locals.breadcrumb = ["Painel", "Perfil"];
    res.locals.breadcrumb = [
        { titulo: "Home", rota: "/" },
        { titulo: "Painel", rota: "/painel-usuario" },
        { titulo: "Perfil", rota: "/painel-usuario/perfil" }
    ];
    next();
}

exports.crumbsPublicacoes = (req, res, next) => {
    //res.locals.breadcrumb = ["Painel", "Publicações"];
    res.locals.breadcrumb = [
        { titulo: "Home", rota: "/" },
        { titulo: "Painel", rota: "/painel-usuario" },
        { titulo: "Publicações", rota: "/painel-usuario/publicacoes" },
    ];
    next();
}

exports.crumbsNovaPublicacao = (req, res, next) => {
    //res.locals.breadcrumb = ["Painel", "Perfil", "Publicações", "Criar Publicação"];
    res.locals.breadcrumb = [
        { titulo: "Home", rota: "/" },
        { titulo: "Painel", rota: "/painel-usuario" },
        { titulo: "Perfil", rota: "/painel-usuario/perfil" },
        { titulo: "Publicações", rota: "/painel-usuario/publicacoes" },
        { titulo: "Criar Publicação", rota: "/painel-usuario/nova-publicacao" },
    ];
    next();
}

exports.crumbsEditarPublicacao = (req, res, next) => {
    //res.locals.breadcrumb = ["Painel", "Perfil", "Publicações", "Editar Publicação"];
    res.locals.breadcrumb = [
        { titulo: "Home", rota: "/" },
        { titulo: "Painel", rota: "/painel-usuario" },
        { titulo: "Perfil", rota: "/painel-usuario/perfil" },
        { titulo: "Publicações", rota: "/painel-usuario/publicacoes" },
        { titulo: "Editar Publicação", rota: "/painel-usuario/editar-publicacao" },
    ];
    next();
}

exports.autenticarUsuario = (req, res, next) => {
    if (req.session.usuario) {
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
    //const url = `http://localhost:3000/api/usuario/id/${res.locals.session.usuario.id}`;
    //const url = `http://localhost:3000/api/usuario/id/${req.session.usuario.id}`;
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

exports.atualizarPerfil = async (req, res, next) => {
    let novoPerfil = {};
    for (elem of Object.entries(req.body)) {
        if (elem[1] != "") {
            if (elem[0] == "confirmacao" && novoPerfil.senha != elem[1]) {
                delete novoPerfil.senha;
            } else {
                novoPerfil[elem[0]] = elem[0] == "telefone" ? parseInt(elem[1]) : elem[1];
            }

        }
    }
    if (req.file != null) novoPerfil.foto = req.file.filename;
    if (Object.entries(novoPerfil).length > 0) {
        novoPerfil.id = req.session.usuario.id;
        // prossiga com a atualização usando API de atualizar usuario
        const url = 'http://localhost:3000/api/usuario/atualizar-usuario';
        const headers = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        const resultado = await axios.patch(url, novoPerfil, headers);
        //if (resultado.data != null) {
        if (resultado.status == 200) {
            console.log('Perfil atualizado com sucesso');
            req.session.destroy(
                (err) => {
                    console.log("Tentativa de destruir a sessão do usuário. Erro: " + err);
                }
            );
        } else {
            console.log('Falha na atualização do Perfil.\n' + resultado);
        }
    } else {
        console.log("Nenhum dado fornecido para atualização de perfil.")
    }
    res.redirect('/painel-usuario/perfil')
}

exports.atualizarPublicacao = async (req, res, next) => {
    return res.json(req.session.usuario);
}