const express = require("express");
const moviesRouter = express.Router();
const path = require('path');
const multer = require('multer');
const {body} = require("express-validator");

const moviesController = require ("../controllers/moviesController");

//          LISTADO         //
moviesRouter.get("/", moviesController.index);


//          CREAR PELICULA          //
moviesRouter.get("/crear", moviesController.crear);
moviesRouter.post("/crear", moviesController.crearPeli);


//          DETALLE PELICULA            //
moviesRouter.get("/:id", moviesController.detalle);


//          EDITAR PELICULA             //
moviesRouter.get("/editar/:id", moviesController.editar);
moviesRouter.post("/editar/:id", moviesController.actualizar);



//          BORRAR PELICULA             //
moviesRouter.post("/delete/:id", moviesController.borrar);





module.exports = moviesRouter;