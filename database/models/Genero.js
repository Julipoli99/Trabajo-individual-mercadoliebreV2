module.exports = (sequelize, dataTypes) => {
    let alias = "Genero";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            notNull: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            notNull: true
        },
        ranking: {
            type: dataTypes.INTEGER(10),
            notNull: true
        },
        active: {
            type: dataTypes.INTEGER(10),
            notNull: true
        }
    }
    let config = {
        tableName: "genres",
        timestamps: false
    }

    let Genero = sequelize.define(alias, cols, config);

    Genero.associate = function(models) {
        Genero.hasMany(models.Pelicula, {
            as: "peliculas",
            foreignKey: "genre_id"
        });
    };
    return Genero;
}