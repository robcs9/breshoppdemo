// handling URLencoded requests
// app.use(express.urlencoded({ extended: true }));
// handling JSON requests
// app.use(express.json());
//const md5 = require("md5");
//const lib = require("./lib/");

const express = require("express");
//const bodyParser = require("body-parser");
//const urlencodedParser = bodyParser.urlencoded({ extended: false });
const port = 3000;
const app = express();
const db = require("./models");

//app.use(express.static('public'));
app.use(express.static(__dirname + '/public')); // usar /public/ ?
app.use('/api/admin', require('./routes/administrador'));
app.use('/api/usuario', require('./routes/usuario'));
app.use('/api/categoria', require('./routes/categoria'));
app.use('/api/publicacao', require('./routes/publicacao'));
app.use('/api/fotos', require('./routes/fotos'));
//app.use('/autenticacao', require('./routes/autenticacao')); // deprecated
app.use('/login', require('./routes/login'));
app.use('/registro', require('./routes/registro'));
//app.use('/', require('./routes/home'));

// View engine
app.set('views', './views');
app.set('view engine', 'ejs');

// Sincronização inicial seguida pela inicialização do servidor
// Se for realizar rebuild (force) da base, lembrar de fazer DROP FOREIGN KEY previamente para evitar erros.
db.sequelize.sync({ force: false, alter: false }).then(
    () => {
        console.log("Sincronização realizada com o BD!");

        // Criando chaves estrangeiras de publicacao
        //db.sequelize.query(`ALTER TABLE publicacao
        //                ADD FOREIGN KEY(id_usuario) REFERENCES usuario(id),
        //                ADD FOREIGN KEY(id_categoria) REFERENCES categoria(id),
        //                ADD FOREIGN KEY(id_fotos) REFERENCES fotos(id)`).then(
        //    (resultado) => {
        //        console.log("Chaves estrangeiras criadas com sucesso.")
        //    }
        //).catch(
        //    (err) => {
        //        console.log("Falha na criação das chaves estrangeiras. Error: " + err);
        //    }
        //);

        app.listen(port, () => {
            console.log("Servidor escutando na porta " + port);
        });
    }
).catch(
    (err) => {
        console.log("Sincronização com o BD falhou. Error: " + err);
    }
);