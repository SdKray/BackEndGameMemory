// atajo req ,rqr
// * Importacion de mongoose ORM
const mongose = require('mongoose');

// ! Funcion de conexion a mongoDB
const dbConnection = async () => {
	try {
		// * metodo de conexion proporcionado por mongoose
		mongose.connect(process.env.DB_CONECTION, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		console.log('Data base onLine');
	} catch (error) {
		console.log(error);
		throw new Error('Error en la conexion');
	}
};
// * exportacion de la funcion para su uso en donde sea deseada,
// ! Se debe importar para poder usarla
module.exports = { dbConnection };
