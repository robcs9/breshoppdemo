exports.getCategoria = (req, res, next) => {
    fetch(`http://localhost:3000/api/categoria/id/${res.locals.publicacao.id_categoria}`).then(
        data => data.json()
    ).then(
        (categoria) => {
            res.locals.categoria = categoria;
            next();
        }
    ).catch(
        err => console.log(err)
    );
}

exports.getPublicacao = (req, res, next) => {
    fetch(`http://localhost:3000/api/publicacao/id/${req.params.id}`).then(
        data => data.json()
    ).then(
        (publicacao) => {
            res.locals.publicacao = publicacao;
            next();
        }
    ).catch(
        err => console.log(err)
    );
}

/*exports.getPublicacaoPorTitulo = async (req, res, next) => {
    try {
        const publicacao = await fetch(`http://localhost:3000/api/publicacao/id/${req.params.id}`);
        res.locals.publicacao = await publicacao.json();
        next();
    } catch (err) {
        err => console.log(err)
    }
}*/

exports.getUsuario = (req, res, next) => {
    fetch(`http://localhost:3000/api/usuario/id/${res.locals.publicacao.id_usuario}`).then(
        data => data.json()
    ).then(
        (usuario) => {
            if(usuario != null) {
                res.locals.usuario = usuario.nome + " " + usuario.sobrenome;
                
            } else {
                res.locals.usuario = "";
            }
            next();
        }
    ).catch(
        err => console.log(err)
    );
}

exports.getFotos = (req, res, next) => {
    fetch(`http://localhost:3000/api/fotos/id/${res.locals.publicacao.id_fotos}`).then(
        data => data.json()
    ).then(
        (fotos) => {
            if(fotos != null) {
                res.locals.fotos = fotos;
            } else {
                res.locals.fotos = {
                    "foto1": "",
                    "foto2": "",
                    "foto3": "",
                    "foto4": ""
                }
            }
            next();
        }
    ).catch(
        err => console.log(err)
    );
}

exports.renderPublicacao = (req, res) => {
    res.render('publicacao');
}