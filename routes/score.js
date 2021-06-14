// * Se importa el Router de express
const {Router, response } = require('express');
// * Se asignan los metodos a "router"
const router = Router();

// * Validar datos desde la peticion con express-validator
const { check } = require('express-validator');
const { crearScore, actualizarScore } = require('../controllers/score');



// * Se establecen las rutas con las funciones get, post, put o delete
router.post('/home',crearScore)
router.put('/:id',actualizarScore)
// * se exporta el router para su uso en el index
module.exports = router