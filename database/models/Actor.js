module.exports = (sequelize, dataTypes) => {
    let alias = "Actor";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            notNull: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(100),
            notNull: true
        },
        last_name: {
            type: dataTypes.STRING(100),
            notNull: true
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1),
            isNull: true
        },
        favorite_movie_id : {
            type: dataTypes.INTEGER(10),
            isNull: true
        }
    }
    let config = {
        tableName: "actors",
        timestamps: false
    }
    
    let Actor = sequelize.define(alias, cols, config);

    Actor.associate = function(models) {
        Actor.belongsToMany(models.Pelicula, {
            as: "peliculas",
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "movie_id",
            timestamps: false
        })
    }
    return Actor;
}