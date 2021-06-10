const { request, response } = require('express');
const User = require('../models/User');
const bcryptjs = require('bcryptjs');

const createUser = async (req = request, res = response) => {
	const { email, password } = req.body;
	try {
		let user = await User.findOne({ email });
		if (user) {
			res.status(400).json({
				ok: false,
				msg: 'El correo ya se encuetra registrado',
			});
		}
		user = new User(req.body);
		//Encriptar
		const salt = bcryptjs.genSaltSync();
		user.password = bcryptjs.hashSync(password, salt);

		await user.save()

		// TODO: Generar Token

		res.status(201).json({
			ok: true,
			uid: user.id,
			name: user.name,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			ok: false,
			msg: 'Por favor Hable con el administrador',
		});
	}
	return;
};

module.exports = { createUser };
