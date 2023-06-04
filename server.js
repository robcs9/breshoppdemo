// handle URLencoded requests
// app.use(express.urlencoded({ extended: true }));
// handle JSON requests
// app.use(express.json());

const express = require("express");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const md5 = require("md5");
const port = 3000;
const app = express();
const db = require("./models");
app.use(express.static('public'));

db.sequelize.sync().then(
    () => {
        app.listen(port, () => {
            console.log("Servidor rodando na porta " + port);
        });
    }
).catch(
    (err) => {
        console.log("Sincronização com o BD falhou.\nError: " + err);
    }
);


// Rotas
