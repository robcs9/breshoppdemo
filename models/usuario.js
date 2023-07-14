module.exports = function (sequelize, DataTypes) {
    const usuario = sequelize.define('usuario', {
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
            defaultValue: "avatar.jpg"
            //allowNull: true
        },
        vendas: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        trocas: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        suspenso: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
            //allowNull: false
        },
        motivo_suspensao: {
            type: DataTypes.TEXT,
            defaultValue: ""
            //allowNull: true
        }
    }, {
        timestamps: false
    });
    
    usuario.associate = (models) => {
        usuario.hasMany(models.publicacao, {
            foreignKey: 'id_usuario'
        });
    };
    return usuario;
}