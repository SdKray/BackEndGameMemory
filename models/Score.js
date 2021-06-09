// * Desestructuracion de importacion de Schema model desde mongoose
const { Schema, model } = require('mongoose');
// * Creacion del esquema que define el model de datos a guardar en la base de datos mognoDB
const ScoreSchema = Schema({
	// * Propiedades del Schema, se define el type como otras propiedades.
	score: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
	},
	// * todo este alboro solo es para referencias la id con un usuario
	user: {
		type: Schema.Types.ObjectId,
		ref: 'Usuario',
		required: true,
	},
});
//! metodo para lo de arriba
ScoreSchema.method('toJSON', function () {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
});


module.exports= model('Score',ScoreSchema)