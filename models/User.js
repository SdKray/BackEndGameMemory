// * Desestructuracion de importacion de Schema model desde mongoose
const { Schema, model } = require('mongoose');
// * Creacion del esquema que define el model de datos a guardar en la base de datos mognoDB
const UserSchema = Schema({
	// * Propiedades del Schema, se define el type como otras propiedades.
	name: {
		type: String,
		required: true,
	},
    last:{
        type: String,
		required: true,
    },
	email: {
		type: String,
		require: true,
		uniqued: true,
	},
	password: {
		type: String,
		required: true,
	},
});



module.exports= model('User',UserSchema)