const controladorHome = require ("../controllers/homeController");

const express = require("express");
const router = express.Router();

router.get("/", controladorHome.home);

module.exports = router;