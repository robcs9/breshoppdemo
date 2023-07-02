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
            res.locals.covers = [];
            //return publicacoes;
            next();
        }
    )/*.then(
        
        (publicacoes) => {
            for(elem of publicacoes) {
                Promise.all(
                    [checkImage("http://localhost:3000/img/publicacao-"+(elem.id)+"-1.jpeg"),
                    checkImage("http://localhost:3000/img/publicacao-"+(elem.id)+"-1.png"),
                    checkImage("http://localhost:3000/img/publicacao-"+(elem.id)+"-1.jpg")]
                ).then(
                    (r) => {
                        for(let i = 0; i < r.length; i++) {
                            if(r[i].status == 200) {
                                res.locals.covers.push(r[i].url.slice(21));
                                console.log(r[i].url)
                                next()
                            }
                        }
                        //next();
                        return res.locals.covers;
                    }
                )
            }
            //next()
        }
    )*/.catch(
        err => console.log(err)//res.render('home', erroCallback(err))
    );
}

exports.exibirCapaPublicacoes = (req, res, next) => {
    
    fetch('http://localhost:3000/api/fotos/').then(
        data => data.json()
    ).then(
        fotos => {
            res.locals.fotos = fotos
            next();
        }
    ).catch(
        err => console.log(err)
    )
}

exports.renderHome = (req, res) => {
    res.render('home');
}











exports.exibirPublicacoesPorCategoria = (req, res) => {
    //(req, res) => res.render('home'/, { categoria : req.params.categoria })
    // cadastrar categoria "outros" no bd
    let id = req.params.id;
    let titulo = req.params.titulo;
    //let featured
    fetch(`http://localhost:3000/api/categoria/${id}`).then(
        data => data.json()
    ).then(
        (data) => {
            console.log(data);
            res.render('home');
        }
    );
}

exports.exibirPublicacao = (req, res) => {
    //(req, res) => res.render('home'/, { categoria : req.params.categoria })
    // cadastrar categoria "outros" no bd
    let id = req.params.id;
    let nome = req.params.nome;

}

// http://localhost:3000/?q=ti+tu+lo query para fuzzy search
