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

// refatorar com o uso da api de fotos aqui para
// dispensar o uso da função checagem de extensão de fotos
exports.listarUltimasPublicacoes = (req, res, next) => {
    fetch('http://localhost:3000/api/publicacao').then(
        data => data.json()
    ).then(
        (publicacoes) => {
            res.locals.publicacoes = publicacoes;
            //res.locals.covers = [];
            //return publicacoes;
            next();
        }
    ).catch(
        err => console.log(err)//res.render('home', erroCallback(err))
    );
}

exports.exibirCapaPublicacoes = (req, res, next) => {
    fetch('http://localhost:3000/api/fotos/').then(
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
    )
}

exports.exibirPublicacoesPorCategoria = (req, res, next) => {
    //(req, res) => res.render('home'/, { categoria : req.params.categoria })
    let id = req.params.id;
    let titulo = req.params.titulo;
    
    fetch(`http://localhost:3000/api/categoria/${id}`).then(
        data => data.json()
    ).then(
        (categoria) => {
            //console.log(categoria[0].publicacaos);
            res.locals.publicacoes = categoria[0].publicacaos;
            //res.locals.busca = categoria[0].publicacaos;
            next();
        }
    );
}

exports.renderHome = (req, res) => {
    res.render('home');
}




exports.exibirResultadoBusca = (req, res, next) => {
    // realizar query usando sequelize e %q%
    const arr = req.query.q.split(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/\W]/g);
    fetch("http://localhost:3000/api/publicacao").then(
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
    )
}

// http://localhost:3000/?q=ti+tu+lo query para fuzzy search
