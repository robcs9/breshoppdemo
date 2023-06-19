module.exports = function (sequelize, DataTypes) {
    const administrador = sequelize.define('administrador', {
        /*id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },*/
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
    }, {
        timestamps: false
    });
    
    return administrador;
}