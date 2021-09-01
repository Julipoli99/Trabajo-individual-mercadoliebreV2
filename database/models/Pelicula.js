module.exports = (sequelize, dataTypes) => {
    let alias = "Pelicula";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            notNull: true,
            autoIncrement: true

        },
        title: {
            type: dataTypes.STRING(500),
            notNull: true,
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1),
            notNull: true
        },
        awards: {
            type: dataTypes.INTEGER(10),
            notNull: true
        },
        release_date: {
            type: dataTypes.DATE,
            notNull: true
        },
        length: {
            type: dataTypes.INTEGER(10),
            isNull: true
        },
        genre_id: {
            type: dataTypes.INTEGER(10),
            isNull: true
        }
    }
    let config = {
        tableName: "movies",
        timestamps: false
    }
    const Pelicula = sequelize.define(alias, cols, config);

    Pelicula.associate = function(models) {
        Pelicula.belongsTo(models.Genero, {
            as: "genero",
            foreignKey: "genre_id"
        }),
        Pelicula.belongsToMany(models.Actor, {
            as: "actores",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false
        });
    }
    return Pelicula;
}