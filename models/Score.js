const { Schema, model } = require('mongoose');
const ScoreSchema = Schema({
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
	user: {
		type: Schema.Types.ObjectId,
		ref: 'Usuario',
		required: true,
	},
});
ScoreSchema.method('toJSON', function () {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
});


module.exports= model('Score',ScoreSchema)