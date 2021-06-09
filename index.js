// TODO: Levantar el server
const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
//Funcionalidad de express a app
const app = express();

//TODO: Conexion a base de datos
dbConnection();
//Lectura y parseo del body
app.use(express.json());
// Rutas
app.use('/api/score',require('./routes/score'))


// Rutas de pruebas
/* app.get('/home', (req, res) => {
	console.log(req.body.nombre);
	res.status(200).json({
		ok: true,
		msj: 'Felicidad encontraste home ',
		type: 'GET',
	});
});

app.post('/home', (req, res) => {
	console.log('estas dentro de la ruta home');
	res.status(200).json({
		ok: true,
		msj: 'Felicidad encontraste home ',
		type: 'POST',
	});
});

app.put('/home', (req, res) => {
	console.log('estas dentro de la ruta home');
	res.status(200).json({
		ok: true,
		msj: 'Felicidad encontraste home ',
		type: 'PUT',
	});
});

app.delete('/home', (req, res) => {
	console.log('estas dentro de la ruta home');
	res.status(200).json({
		ok: true,
		msj: 'Felicidad encontraste home ',
		type: 'DELETE',
	});
}); */

app.listen(process.env.PORT, () => {
	console.log(
		'El servidor esta corriendo en: http://localhost:' + process.env.PORT + '/'
	);
});
