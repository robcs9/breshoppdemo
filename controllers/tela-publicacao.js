exports.getPublicacao = (req, res, next) => {
    fetch(`http://localhost:3000/api/publicacao/id/${req.params.id}`).then(
        data => data.json()
    ).then(
        (publicacao) => {
            res.locals.publicacao = publicacao;
            next();
        }
    );
}

exports.getUsuario = (req, res, next) => {
    fetch(`http://localhost:3000/api/usuario/id/${res.locals.publicacao.id_usuario}`).then(
        data => data.json()
    ).then(
        (usuario) => {
            if(usuario == null) {
                res.locals.usuario = usuario.nome + " " + usuario.sobrenome;
            } else {
                res.locals.usuario = "";
            }
            next();
        }
    ).catch(
        (err) => {
            console.log(err);
        }
    );
}

exports.getFotos = (req, res, next) => {
    fetch(`http://localhost:3000/api/fotos/id/${res.locals.publicacao.id_fotos}`).then(
        data => data.json()
    ).then(
        (fotos) => {
            if(fotos == null) {
                res.locals.fotos = {
                    "foto1": "",
                    "foto2": "",
                    "foto3": "",
                    "foto4": ""
                }
            } else {
                res.locals.fotos = fotos;
            }
            next();
        }
    ).catch(
        (err) => {
            console.log(err);
        }
    );
}

exports.renderPublicacao = (req, res) => {
    res.render('publicacao');
}