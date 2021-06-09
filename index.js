// * Seccion de importacion de dependencia como express u otras funciones creadas en el proyecto
// TODO: Levantar el server
// ! Dependencia Express siendo importada
const express = require('express');
require('dotenv').config();
// ? Funcion creada en ./database/config
const { dbConnection } = require('./database/config');
// * se carga los metodos de Express a la constante app para ser usados como es el listen, use ,get, put ,etc.
//Funcionalidad de express a app
const app = express();

//TODO: Conexion a base de datos
// * Funcion dbConnection encagada de establecer la conexion con la base de datos por medio de los metodos del orm mongoose
dbConnection();

// * usamos los metodos definidos por la libreria para poder leer el body o "cuerpo" de la peticion
//Lectura y parseo del body
app.use(express.json());

// * usamos el metodo de Express "use", para ligar el route ubicado en ./routes/score
// * la ruta completa seria http://localhost:4000/api/score/<lo establecido dentro del archivo del route>
// Rutas
app.use('/api/score', require('./routes/score'));
app.use('/api/user', require('./routes/user'));

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

//    * El metodo listen proviene de la libreria Express, es el encargado de levantar el servidor
//    * Dicho metodo recibe 2 parametros:
//    * listen('El puerto','funcion de callback')

app.listen(process.env.PORT, () => {
	console.log(
		'El servidor esta corriendo en: http://localhost:' + process.env.PORT + '/'
	);
});
