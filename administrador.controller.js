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
    (err) => console.log("Autenticação com o BD falhou. Error: " + err)
);

const Administrador = sequelize.define('administrador', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    sobrenome: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
});


Administrador.sync().then(
    // Use métodos de query (.query(), .findAll(), .destroy(), .create(), etc) abaixo.

    sequelize.query("select * from administrador").then(
        (req) => console.log(req)
    ).catch(
        (err) => console.log("Query falhou. Error: " + err)
    )
).catch(
    (err) => console.log("Sincronização com o BD falhou. Error: " + err)
);