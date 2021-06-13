const { request, response } = require('express');
const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

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

		await user.save();

		// TODO: Generar Token
		const token = await generarJWT(user._id, user.name);

		res.status(201).json({
			ok: true,
			uid: user.id,
			name: user.name,
			token,
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

const loginUser = async (req = request, res = response) => {
	const { email, password } = req.body;
	try {
		let user = await User.findOne({ email });
		if (!user) {
			res.status(400).json({
				ok: false,
				msg: 'No se encontro a ningun usuario con el email',
			});
		}

		//Validar password con bcryptjs
		const validPassword = bcryptjs.compareSync(password, user.password);
		if (!validPassword) {
			res.status(400).json({
				ok: false,
				msg: 'Contraseña incorrecta',
			});
		}
		const token = await generarJWT(user._id, user.name);

		res.status(200).json({
			ok: true,
			uid: user.id,
			name: user.name,
			token,
		});
	} catch (error) {
		console.log('[login]', error);
		return res.status(500).json({
			ok: false,
			msg: 'Por favor Hable con el administrador',
		});
	}
};

const revalidarToken =async (req = request, res = response) => {
	const { uid, name } = req;

	const token = await generarJWT(uid, name);

	res.json({
		ok: true,
		token,
		uid,
		name,
	});
};

module.exports = { createUser, loginUser };
