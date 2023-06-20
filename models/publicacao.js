module.exports = function (sequelize, DataTypes) {
    const publicacao = sequelize.define('publicacao', {
        /*id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },*/
        /*id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_categoria: {
            type: DataTypes.INTEGER,
            allowNull: false
        },*/
        titulo: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        tipo_negociacao: {
            type: DataTypes.ENUM('venda', 'troca'),
            allowNull: false
        },
        preco: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        descricao_produto: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        descricao_vendedor: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        /*id_fotos: {
            type: DataTypes.INTEGER,
            allowNull: false
        },*/
        validada: {
            type: DataTypes.BOOLEAN,
            //allowNull: false,
        },
        finalizada: {
            type: DataTypes.BOOLEAN,
            //allowNull: false,
        },
        motivo_rejeicao: {
            type: DataTypes.STRING(100),
        }
    }, {
        timestamps: false
    });

    publicacao.associate = (models) => {
        publicacao.belongsTo(models.categoria, {
            foreignKey: 'id_categoria',
        });
        publicacao.belongsTo(models.fotos, {
            foreignKey: 'id_fotos'
        });
        publicacao.belongsTo(models.usuario, {
            foreignKey: 'id_usuario'
        });
    };

    //publicacao.associate = (models) => {
    //    // https://sequelize.org/docs/v6/core-concepts/assocs/
    //    /*publicacao.belongsTo(models.usuario, {
    //        foreignKey: "id_usuario"
    //    });
    //    publicacao.hasOne(models.categoria, {
    //        foreignKey: "id_categoria"
    //    });
    //    publicacao.hasOne(models.fotos, {
    //        foreignKey: "id_fotos"
    //    });*/
    //};
    
    // Criando chaves estrangeiras
    //sequelize.query(`ALTER TABLE publicacao
    //                ADD FOREIGN KEY(id_usuario) REFERENCES usuario(id),
    //                ADD FOREIGN KEY(id_categoria) REFERENCES categoria(id),
    //                ADD FOREIGN KEY(id_fotos) REFERENCES fotos(id)`).then(
    //    (resultado) => {
    //        console.log("Chaves estrangeiras criadas com sucesso.")
    //        return publicacao;
    //    }
    //).catch(
    //    (err) => {
    //        console.log("Falha na criação das chaves estrangeiras. Error: " + err);
    //        return publicacao;
    //    }
    //);
    return publicacao;
}