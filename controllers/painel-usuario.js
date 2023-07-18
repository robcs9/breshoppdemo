const axios = require('axios');
// Perfil
exports.getUsuario = async (req, res, next) => {
    // consultar a id do usuário através da sessão ativa
    //return res.send(req.session.usuario)
    const headers = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    const u = await axios.get(`http://localhost:3000/api/usuario/id/${req.session.usuario.id}`, headers);
    if(u.status == 200) {
        req.session.usuario = u.data;
        res.locals.usuario = u.data;
    }
    next();
}

exports.getPublicacao = (req, res, next) => {
    if (req.session.usuario.publicacaos != null) {
        for (elem of req.session.usuario.publicacaos) {
            if (elem.id == req.params.id) {
                res.locals.publicacao = elem;
                req.session.publicacaoEdit = elem;
                console.log('locals.publicacao has been set');
            }
        }
    }
    if (res.locals.publicacao == null || res.locals.publicacao.id != req.params.id) {
        console.log('Publicação editável não encontrada');
        return res.redirect('/painel-usuario/publicacoes');
    }
    next();
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
        //res.locals.session = req.session;
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

exports.atualizarPublicacao = async (req, res) => {
    //let publicacao = await axios.get(url1, req.session.publicacaoEdit.id, headers);
    let publicacao = req.session.publicacaoEdit;
    //let fotos = req.session.publicacaoEdit.foto;
    let url1 = 'http://localhost:3000/api/publicacao/atualizar-publicacao';
    let url2 = 'http://localhost:3000/api/fotos/atualizar-fotos';
    const headers = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    for (elem of Object.entries(req.body)) {
        if (elem[1] != "") {
            publicacao[elem[0]] = elem[0] == "preco" ? parseInt(elem[1]) : elem[1];
        }
    }
    if (req.files != null) {
        let count = 0;
        for (elem of req.files) {
            count++;
            publicacao.foto["foto" + count] = elem.filename;
        }
    }
    const resultado = await axios.patch(url1, publicacao, headers);
    const resultado1 = await axios.patch(url2, publicacao.foto, headers);
    if (resultado.status == 200 || resultado1.status == 200) {
        console.log('Publicação atualizada com sucesso');
        // soft refresh session
        let refreshUser = await axios.get(`http://localhost:3000/api/usuario/id/${req.session.usuario.id}`);
        if (refreshUser.status == 200) {
            req.session.usuario = refreshUser.data;
            console.log('User refresh succeeded');
        } else {
            console.log('User refresh failed');
        }
    } else {
        console.log('Falha na atualização da Publicação.\n' + resultado + '\n' + resultado1);
    }
    res.redirect('/painel-usuario/publicacoes')

    /*let publicacaoAtualizada = {};
    let fotosAtualizadas = {};
    
    for (elem of Object.entries(req.body)) {
        if (elem[1] != "") {
            publicacaoAtualizada[elem[0]] = elem[0] == "preco" ? parseInt(elem[1]) : elem[1];
        }
    }
    if (req.files != null) {
        let count = 0;
        for(elem of req.files) {
            count++;
            publicacaoAtualizada["foto"+count] = elem.filename;
            fotosAtualizadas["foto"+count] = elem.filename;
        }
    }
    if (Object.entries(publicacaoAtualizada).length > 0) {
        //publicacaoAtualizada.id = res.locals.publicacao.id;
        publicacaoAtualizada.id = req.session.publicacaoEdit.id;
        // prossiga com a atualização usando API de atualizar usuario
        const url = 'http://localhost:3000/api/publicacao/atualizar-publicacao';
        const url1 = 'http://localhost:3000/api/fotos/atualizar-fotos';
        const headers = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        const resultado = await axios.patch(url, publicacaoAtualizada, headers);
        const resultado1 = await axios.patch(url1, fotosAtualizadas, headers);
        return res.json(publicacaoAtualizada)
        //if (resultado.data != null) {
        if (resultado.status == 200 || resultado1.status == 200) {
            console.log('Publicação atualizada com sucesso');
            // soft refresh session
            let refreshUser = await axios.get(`http://localhost:3000/api/usuario/id/${req.session.usuario.id}`);
            if(refreshUser.status == 200) {
                req.session.usuario = refreshUser.data;
                console.log('User refresh succeeded');
            } else {
                console.log('User refresh failed');
            }
        } else {
            console.log('Falha na atualização da Publicação.\n' + resultado);
        }
    } else {
        console.log("Nenhum dado fornecido para atualização de publicação.")
    }
    res.redirect('/painel-usuario/publicacoes')*/
}

exports.excluirPublicacao = async (req, res) => {
    // autenticar se a id do usuário bate com a chave estrangeira na publicação (já é feito pelo getPublicacao)
    return res.json('test')
    let url0 = `http://localhost:3000/api/publicacao/id/${req.params.id}`;
    const headers = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    let publicacao = await axios.get(url0);
    let p = publicacao.data;
    if(publicacao.status == 200 && req.session.usuario.id == p.id_usuario) {
        return res.json(p);
    } else {
        return res.send('nothing found')
    }
    const url = 'http://localhost:3000/api/publicacao/excluir-publicacao';
    const resultado = await axios.delete(url, { id: res.locals.publicacao.id }, headers);
    if (resultado.status == 200) {
        console.log('Publicação deletada com sucesso');
    } else {
        console.log('Falha na deleção da Publicação.\n' + resultado);
    }
    res.redirect('/painel-usuario/publicacoes');
}