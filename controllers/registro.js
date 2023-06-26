db = require('../models');
const axios = require('axios');

exports.registro = (req, res) => {
    res.render('registro');
}

exports.registrarUsuario = (req, res) => {
    let msg = "";
    const novoUsuario = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        cpf: req.body.cpf,
        senha: req.body.senha,
        telefone: req.body.telefone
    }
    const confirmacaoSenha = req.body.confirmacaoSenha;

    // checar também se a checkbox dos termos foi marcada
    if (novoUsuario.nome == "" || novoUsuario.cpf == "" || novoUsuario.email == "" ||
        novoUsuario.telefone == "" || novoUsuario.senha == "" || novoUsuario.sobrenome == "" ||
        confirmacaoSenha == ""
    ) {
        msg = "Preencha o(s) campo(s) vazio(s).";
        console.log(msg);
        res.render('registro', { msg });
    } else if (confirmacaoSenha != novoUsuario.senha) {
        msg = "A senha e a confirmação são diferentes.";
        console.log(msg);
        res.render('registro', { msg });
    } else {
        axios.post('http://localhost:3000/api/usuario/cadastrar-usuario',
            novoUsuario, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(
            (data) => {
                console.log(data);
                msg = "Cadastro concluído";
                res.render('registro', { msg });
            }
        ).catch(
            (err) => {
                console.log(err);
                msg = "Erro: " + err;
                res.render('registro', { msg });
            }
        );
    }

    /*if (req.body.confirmacaoSenha != novoUsuario.senha) {
        msg = "A senha e a confirmação são diferentes.";
        console.log(msg);
        res.render('registro', { msg });
    } else if() {

    } else {
        axios.post('http://localhost:3000/api/usuario/cadastrar-usuario',
            novoUsuario, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(
            (data) => {
                console.log(data);
                msg = "Cadastro concluído";
                res.render('registro', { msg });
            }
        ).catch(
            (err) => {
                console.log(err);
                msg = err;
                res.render('registro', { msg });
            }
        );
    }*/

    // Usando fetch
    /*fetch('http://localhost:3000/api/usuario/cadastrar-usuario', {
        method: "POST",
        body: novoUsuario
    }).then(
        () => {
            let msg = "Novo usuário cadastrado";
            console.log(msg);
            res.render('registro', { msg })
        }
    ). catch(
        (err) => {
            console.log(err);
            let msg = erroCallback(err);
            res.render('registro', { msg });
            //res.send(erroCallback(err));
        }
    );*/

    // Usando axios
    /*axios.get('http://localhost:3000/api/usuario').then(
        data => console.log(data)
    ).catch(
        err => console.log(err)
    );*/

    /*const { data } = axios.post('http://localhost:3000/api/usuario/cadastrar-usuario',
    novoUsuario, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });*/

    /*axios.post('http://localhost:3000/api/usuario/cadastrar-usuario').then(
        (data) => {
            console.log(data)
        }
    ).catch(
        err => console.log(err)
    );*/


    //console.log(msg);
    //res.render('registro', { msg });
}