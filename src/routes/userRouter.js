const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require('multer');
const {body} = require("express-validator");

const userController = require ("../controllers/userController")


router.get("/", userController.index);

router.get("/registro", userController.registro);
router.post("/registro", userController.registerProcess);

router.get("/registracionOk", userController.registracionExitosa);



module.exports = router;