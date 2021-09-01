const fs = require("fs");
const path = require("path");
const {validationResult} = require ("express-validator");
const bcryptjs = require("bcryptjs");
const db = require ("../../database/models");
const { sequelize, Sequelize } = require('../../database/models');
//const { where } = require('sequelize/types');
const op = Sequelize.Op;

const controlador = {
    index: (req, res) => {
        db.Pelicula.findAll()
            .then(function(peliculas){
                res.render("listadoPeliculas", {peliculas: peliculas})
            })
    },
    detalle: (req, res) => {
        db.Pelicula.findByPk(req.params.id, {
            include: [{association: "genero"}, {association: "actores"}]
        })
            .then(function(pelicula){
                res.render("detallePelicula", {pelicula: pelicula})
            })
    },
    editar: (req, res) => {
        let pedidoPelicula = db.Pelicula.findByPk(req.params.id);
        let pedidoGenero = db.Genero.findAll();

        Promise.all([pedidoPelicula, pedidoGenero])
            .then(function([pelicula, generos]){
                res.render("editarPelicula", {pelicula: pelicula, generos: generos})
            })
            
    },
    actualizar: (req, res) => {
        db.Pelicula.update({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.calificacion,
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect("/peliculas/" + req.params.id)
    },
    borrar: (req, res) => {
        db.Pelicula.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/peliculas");
    }
}

module.exports = controlador;