exports.exibirPublicacao = (req, res, next) => {
    
    fetch(`http://localhost:3000/api/publicacao/id/${req.params.id}`).then(
        data => data.json()
    ).then(
        (publicacao) => {
            res.locals.publicacao = publicacao;
            next();
        }
    );
}

exports.fotosPublicacao = (req, res, next) => {
    
    wfetch(`http://localhost:3000/api/publicacao/id/${req.params.id}`).then(
        data => data.json()
    ).then(
        (publicacao) => {
            res.locals.publicacao = publicacao;
            next();
        }
    );
}

exports.renderPublicacao = (req, res) => {
    res.render('publicacao');
}