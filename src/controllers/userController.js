const fs = require("fs");
const path = require("path");
const {validationResult} = require ("express-validator");
const bcryptjs = require("bcryptjs");

const userFilePath = path.join(__dirname, "../data/userDataBase.json");
const usuarios = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));



const controller = {
    index: (req, res) => {
        res.render("login")
    },
    registro: (req, res) => {
        res.render("register")
    },
    registerProcess: (req, res) => {
        

        idNuevo = 0;

        for(let i of usuarios){
            if (idNuevo < i.id){
                idNuevo = i.id
            }
        }
        idNuevo++;

        let nombreImagen = req.file.filename;
        let compradorSitio = false;
        let EncryptedPass = bcryptjs.hashSync(req.body.contraseña, 10);

        if (req.body.perfilUsuario == "Comprador"){
            compradorSitio = true;
        }

        let usuarioNuevo = {
            id: idNuevo,
            nombreApellido: req.body.nombre_apellido,
            nombreUsuario: req.body.nombre_usuario,
            fecha: req.body.fecha,
            domicilio: req.body.domicilio,
            intereses: req.body.Interes,
            perfilUsuario: compradorSitio,
            contraseña: req.body.contraseña,
            fotoPerfil: nombreImagen
        };

        usuarios.push(usuarioNuevo);

        fs.writeFileSync(userFilePath, JSON.stringify(usuarios, null, " "));
        res.redirect("/login/registracionOk")

    },
    registracionExitosa: (req, res) => {
        res.render("registracionOk")
    }
    
}

module.exports = controller