const checkImage = require('../utils/checkImage');

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

exports.listarUltimasPublicacoes = (req, res, next) => {
    fetch('http://localhost:3000/api/publicacao').then(
        data => data.json()
    ).then(
        (publicacoes) => {
            res.locals.publicacoes = publicacoes;
            next();
        }
    ).catch(
        err => console.log(err)//res.render('home', erroCallback(err))
    );
}

exports.exibirCapaPublicacoes = (req, res, next) => {
    // fotos relacionadas
    //return res.json(res.locals.publicacoes)
    let f = [];
    if (res.locals.publicacoes != null) {
        for (elem of res.locals.publicacoes) {
            if(elem.foto != null) {
                f.push(elem.foto.foto1)
            }
        }
    }
    res.locals.fotos = f;
    next();
    /*fetch('http://localhost:3000/api/fotos/').then(
        data => data.json()
    ).then(
        (fotos) => {
            let fotosAssociadas = [];
            if(fotos == null) {
                fotos = [];
            }
            if(res.locals.publicacoes == null) {
                res.locals.publicacoes = [];
            }
            fotos.forEach(foto => {
                res.locals.publicacoes.forEach(
                    (publicacao) => {
                        if(publicacao.id_fotos == foto.id) {
                            fotosAssociadas.push(foto.foto1)
                        }
                    }
                )
            });
            res.locals.fotos = fotosAssociadas;
            //res.locals.fotos = fotos;
            next();
        }
    ).catch(
        err => console.log(err)
    )*/
}

exports.exibirPublicacoesPorCategoria = (req, res, next) => {
    //(req, res) => res.render('home'/, { categoria : req.params.categoria })
    /*let id = req.params.id;
    fetch(`http://localhost:3000/api/categoria/${id}`).then(
        data => data.json()
    )*/
    let nome = req.params.nome;
    fetch(`http://localhost:3000/api/categoria/nome/${nome}`).then(
        data => data.json()
    ).then(
        (categoria) => {
            if (categoria == null) {
                console.log("Categoria não existe");
            } else if (categoria.publicacaos.length == 0) {
                console.log("Categoria sem nenhuma publicação")
            } else {
                res.locals.publicacoes = categoria.publicacaos;
            }
            next();
        }
    );
}

exports.renderHome = (req, res) => {
    res.render('home');
}


exports.exibirResultadoBusca = async (req, res, next) => {
    const data = await fetch(`http://localhost:3000/api/publicacao?q=${req.query.q}`);
    const publicacoes = await data.json();
    if (publicacoes == null) {
        console.log("Categoria não existe");
    } else if (publicacoes.length == 0) {
        console.log("Categoria sem nenhuma publicação")
    } else {
        res.locals.publicacoes = publicacoes;
    }
    next();
    // realizar query usando sequelize e %q%
    //const arr = req.query.q.split(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/\W]/g);
    /*fetch("http://localhost:3000/api/publicacao?q=").then(
        data => data.json()
    ).then(
        (publicacoes) => {
            let publics = [];
            arr.forEach(
                (elem) => {
                    publicacoes.forEach(
                        (publi) => {
                            if(elem == publi.titulo) {
                                publics.push(publi);
                            }
                        }
                    )
                }
            )
            res.locals.busca = publics;
            next()
        }
    )*/
}

exports.checarAutenticacao = (req, res, next) => {
    //return res.json(req.session)
    res.locals.sess = req.session;
    next();
}