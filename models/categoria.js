module.exports = function (sequelize, DataTypes) {
    const categoria = sequelize.define('categoria', {
        /*id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },*/
        nome: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true
        }
    }, {
        timestamps: false,
    });
    
    categoria.associate = (db) => {
        categoria.hasMany(db.publicacao, {
            foreignKey: 'id_categoria',
        })
    };

    //categoria.associate = (models) => {
    //    // https://sequelize.org/docs/v6/core-concepts/assocs/
    //    /*categoria.hasMany(models.publicacao, {
    //        //onDelete: "CASCADE", // default?
    //    });*/
    //};
    
    return categoria;
}