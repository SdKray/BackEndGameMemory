// * Se importa el Router de express
const { Router } = require('express');
// * Se asignan los metodos a "router"
const router = Router();

// * Validar datos desde la peticion con express-validator
const { check } = require('express-validator');
const { createUser, loginUser } = require('../controllers/user');

// * Se establecen las rutas con las funciones get, post, put o delete
router.post('/new',createUser);

router.post('/',loginUser);

// * se exporta el router para su uso en el index
module.exports = router;
