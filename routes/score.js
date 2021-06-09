// * Se importa el Router de express
const { Router } = require('express');
// * Se asignan los metodos a "router"
const router = Router();

// * Se establecen las rutas con las funciones get, post, put o delete
router.get('/home', (req, res) => {
	console.log(req.body.nombre);
	res.status(200).json({
		ok: true,
		msj: 'Holi',
		type: 'Get',
	});
});

// * se exporta el router para su uso en el index
module.exports = router