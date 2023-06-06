module.exports = function (sequelize, DataTypes) {
    const fotos = sequelize.define('fotos', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        foto1: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        foto2: {
            type: DataTypes.BLOB,
            allowNull: true
        },
        foto3: {
            type: DataTypes.BLOB,
            allowNull: true
        },
        foto4: {
            type: DataTypes.BLOB,
            allowNull: true
        },
        foto5: {
            type: DataTypes.BLOB,
            allowNull: true
        },
        foto6: {
            type: DataTypes.BLOB,
            allowNull: true
        }
    }, {
        timestamps: false
    });
    
    //fotos.associate = (models) => {
    //    // https://sequelize.org/docs/v6/core-concepts/assocs/
    //    /*fotos.belongsTo(models.publicacao);*/
    //};
    return fotos;
}