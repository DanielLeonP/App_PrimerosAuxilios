var express = require('express');
var router = express.Router();
var database = require("../database/database.js");



router.get('/', function (req, res, next) {
    //lista enfermedades
});

router.get('/Enfermedad', function (req, res, next) {
    //informacion enfermedad
});
router.get('/Contacto', function (req, res, next) {
    //informacion contaxto
});

module.exports = router;






