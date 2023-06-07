module.exports = function (sequelize, DataTypes) {
    const usuario = sequelize.define('usuario', {
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
        cpf: {
            type: DataTypes.STRING(11),
            allowNull: false,
            unique: true
        },
        senha: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        telefone: {
            type: DataTypes.STRING(11),
            allowNull: false
        },
        foto: {
            type: DataTypes.STRING,
            allowNull: true
        },
        vendas: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        trocas: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        suspenso: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        motivo_suspensao: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }, {
        timestamps: false
    });
    
    //usuario.associate = (models) => {
    //    // https://sequelize.org/docs/v6/core-concepts/assocs/
    //    /*usuario.hasMany(models.publicacao);*/
    //};
    return usuario;
}