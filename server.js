// handling URLencoded requests
// app.use(express.urlencoded({ extended: true }));
// handling JSON requests
// app.use(express.json());
//const md5 = require("md5");
//const lib = require("./lib/");

require('dotenv').config();
const express = require("express");
const path = require('path');
const axios = require('axios');
//const bodyParser = require("body-parser");
//const urlencodedParser = bodyParser.urlencoded({ extended: false });
const port = 3000;
const app = express();
const db = require("./models");

//app.use(express.static('public'));
app.use(express.static(__dirname + '/public')); // usar /public/ ?
//app.use(express.static(path.join(__dirname, '/public')));
//app.use('/', express.static(path.join(__dirname, '/public')))
// APIs
app.use('/api/admin', require('./routes/administrador'));
app.use('/api/usuario', require('./routes/usuario'));
app.use('/api/categoria', require('./routes/categoria'));
app.use('/api/publicacao', require('./routes/publicacao'));
app.use('/api/fotos', require('./routes/fotos'));

// Session
const session = require('express-session');
app.use(session({
    secret: 'sua_chave_secreta_aqui',
    resave: false,
    saveUninitialized: false,
    //store: store,
    cookie: {
        maxAge: 3600000
    }
}));

// View Engine
app.set('views', './views');
app.set('view engine', 'ejs');

// Views
//app.use('/autenticacao', require('./routes/autenticacao')); // deprecated
app.use('/login', require('./routes/login'));
app.use('/registro', require('./routes/registro'));
app.use('/', require('./routes/home'));
app.use('/publicacao', require('./routes/tela-publicacao'));
app.use('/painel-usuario', require('./routes/painel-usuario'));
app.use('/auth', require('./routes/auth'));
// criar route para o view do painel admin


// Sincronização inicial seguida pela inicialização do servidor
// Se for realizar rebuild (force) da base, lembrar de fazer DROP FOREIGN KEY previamente para evitar erros.
db.sequelize.sync({ force: false, alter: false }).then(
    () => {
        console.log("Sincronização realizada com o BD!");

        app.listen(port, () => {
            console.log("Servidor escutando na porta " + port);
            
            db.sequelize.query("select * from administrador;").then(
                (query) => {
                    popularBase(query);
                }
            ).catch(
                err => console.log('Error: ' + err)
            )
        });
    }
).catch(
    (err) => {
        console.log("Sincronização com o BD falhou. Error: " + err);
    }
);

const popularBase = async (selectAdmins) => {
    if(selectAdmins[0].length < 1) {
        await axios.post('http://localhost:3000/api/admin/popular-admin');
        await axios.post('http://localhost:3000/api/usuario/popular-usuario');
        await axios.post('http://localhost:3000/api/categoria/popular-categoria');
        await axios.post('http://localhost:3000/api/fotos/popular-fotos');
        await axios.post('http://localhost:3000/api/publicacao/popular-publicacao');
    }
}