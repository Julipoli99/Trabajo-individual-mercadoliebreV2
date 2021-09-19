const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const methodOverride = require ("method-override");
const cookie = require ("cookie-parser")


app.use(express.urlencoded({ extended: false }));
//app.use(logger('dev'));
app.use(express.json());




//app.use(express.static(path.join(__dirname, "./public")))// Necesario para los archivos estáticos en el folder /public



let rutaCarpetaPublic = path.resolve(__dirname,"./public"); //genero ruta absoluta

app.use(express.static(rutaCarpetaPublic)); //indico los archivos estáticos publicos
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE






app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
})

app.set("view engine", "ejs");
app.set('views', [path.join(__dirname, '/views'),
                      path.join(__dirname, '/views/products/'),  // Define la ubicación de la carpeta de las Vistas y Subcarpetas
                      path.join(__dirname, '/views/users/')]);


/****   REQUIRES DE RUTAS   ****/
const homeRouter = require ("./src/routes/homeRouter")
const userRouter = require ("./src/routes/userRouter")
const moviesRouter = require ("./src/routes/moviesRouter");
const productRouter = require ("./src/routes/productRouter");



/****   RUTAS GLOBALES    ****/
app.use("/", homeRouter);
app.use("/login", userRouter);
app.use("/peliculas", moviesRouter);
app.use("/product", productRouter);
