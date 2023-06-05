module.exports = function (sequelize, DataTypes) {
    const categoria = sequelize.define('categoria', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
    /*const publicacao = require('publicacao');
    categoria.hasMany(publicacao);*/
    
    return administrador;
}