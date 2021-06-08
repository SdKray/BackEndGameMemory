// TODO: Levantar el server
const express = require('express');
require('dotenv').config();
const app = express();
//Lectura y parseo del body
app.use(express.json());
// Rutas
app.get('/home', (req, res) => {
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

app.delete('/home', (req, res) => {
	console.log('estas dentro de la ruta home');
	res.status(200).json({
		ok: true,
		msj: 'Felicidad encontraste home ',
		type: 'DELETE',
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

app.listen(4000, () => {
	console.log(process)
    console.log('El servidor esta corriendo en el puerto 4000');
});

