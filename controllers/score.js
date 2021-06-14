const { request, response } = require('express');
const Score = require('../models/Score');

const crearScore = async (req = request, res = response) => {
	const score = new Score(req.body);
	try {
		const eventoGuardado = await score.save();
		console.log(eventoGuardado);
		res.status(200).json({ ok: true, eventoGuardado });
	} catch (error) {
		console.log(error);
		res.status(500).json({ ok: false, msg: 'F' });
	}
};

const actualizarScore = async (req = request, res = response) => {
	const scoreId = req.params.id;
	const { uid } = req;
	try {
		const score = await Score.findById(scoreId);
		if (!score) {
			return res.status(404).json({ ok: false, msg: 'Score not found' });
		}
		if (score.user.toString() !== uid) {
			return res
				.status(401)
				.json({ ok: false, msg: 'You don´t have sufficient privileges' });
		}
		const newScore = { ...req.body, user: uid };
		const scoreUptade = await Score.findByIdAndUpdate(scoreId, newScore, {
			new: true,
		});
		res.status(200).json({ ok: true, scoreUptade });
	} catch (error) {
		console.log(error);
		res.status(500).json({ ok: false, msg: 'talk to the admin' });
	}
};
module.exports = { crearScore, actualizarScore };
