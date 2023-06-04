// É necessário configurar os parâmetros de login e senha da conexão abaixo de acordo com o que está no workbench
// Certifique-se de que o host usado no workbench é "localhost" também, do contrário, modifique o atributo host do sequelize abaixo
// Depois, criar um novo schema chamado breshopp para prosseguir com a conexão 

const { Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('breshopp', 'breshopp', 'breshopp', {
    host:'localhost',
    dialect:'mysql',
    define: {
        freezeTableName: true
    }
});

sequelize.authenticate().then(
    () => console.log('Conectado!!')
).catch(
    (err) => console.log("Error: " + err)
);