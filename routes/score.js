const { Router } = require('express');
const router = Router();
router.get('/home', (req, res) => {
	console.log(req.body.nombre);
	res.status(200).json({
		ok: true,
		msj: 'Holi',
		type: 'Get',
	});
});
module.exports = router