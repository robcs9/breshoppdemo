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
const mysql = require('mysql2/promise');

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


inicializar().then(
    () => {
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
        )
    }
)
// Sincronização inicial seguida pela inicialização do servidor
// Se for realizar rebuild (force) da base, lembrar de fazer DROP FOREIGN KEY previamente para evitar erros.

const popularBase = async (selectAdmins) => {
    if(selectAdmins[0].length < 1) {
        const r = [];
        r.push(await axios.post('http://localhost:3000/api/admin/popular-admin'));
        r.push(await axios.post('http://localhost:3000/api/usuario/popular-usuario'));
        r.push(await axios.post('http://localhost:3000/api/categoria/popular-categoria'));
        r.push(await axios.post('http://localhost:3000/api/fotos/popular-fotos'));
        r.push(await axios.post('http://localhost:3000/api/publicacao/popular-publicacao'));
        for(elem of r) {
            console.log(elem.data.msg);
        }
        //const r1 = await axios.post('http://localhost:3000/api/admin/popular-admin');
        //const r2 = await axios.post('http://localhost:3000/api/usuario/popular-usuario');
        //const r3 = await axios.post('http://localhost:3000/api/categoria/popular-categoria');
        //const r4 = await axios.post('http://localhost:3000/api/fotos/popular-fotos');
        //const r5 = await axios.post('http://localhost:3000/api/publicacao/popular-publicacao');
        //console.log(
        //    r1.data.msg + '\n'+
        //    r2.data.msg + '\n'+
        //    r3.data.msg + '\n'+
        //    r4.data.msg + '\n'+
        //    r5.data.msg + '\n'
        //);
    }
}

async function inicializar () {
    try {
        // const { host, port, user, password, database } = config.database; // implemented with extra security
        const connection = await mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'breshopp',
            password: 'breshopp'
        });
        const resultado = await connection.query(`CREATE DATABASE IF NOT EXISTS breshopp;`);
        //console.log('Database "breshopp" foi criado com sucesso.');
    } catch (err) {
        console.log("Erro na criação de database: " + err);
    }
}