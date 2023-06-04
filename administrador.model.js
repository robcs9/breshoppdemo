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
    () => console.log("Sucesso!")
).catch(
    (err) => console.log("Sincronização com o BD falhou. Error: " + err)
);