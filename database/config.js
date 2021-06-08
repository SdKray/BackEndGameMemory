// atajo req ,rqr
const mongose = require('mongoose');

const dbConnection = async () => {
	try {
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

module.exports = { dbConnection };
