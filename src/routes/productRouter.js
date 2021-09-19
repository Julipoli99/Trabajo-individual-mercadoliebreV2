const express = require("express");
const router = express.Router();

const controlador = require("../controllers/productController");

router.get("/", controlador.index);

module.exports = router;