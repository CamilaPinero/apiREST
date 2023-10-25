import { pool } from "../db.js";

const ctaUsuarioController = {
	getCtaUsuario: async (req, res) => {
		try {
			const [result] = await pool.query(
				"SELECT DISTINCT user, cuenta, pesos FROM cuentausuario cu JOIN usuarios u ON u.id = cu.id_usuario JOIN cuentabancaria cb ON cb.id = cu.id_cuentabancaria"
			);
			res.json(result);
		} catch (error) {
			res.status(500).json({ message: "Something went wrong" });
		}
	},
	getCtaUsuarioById: async (req, res) => {
		try {
			const { id } = req.params;
			const [result] = await pool.query(
				"SELECT * FROM cuentausuario WHERE id = ?",
				[id]
			);
			res.json(result);
		} catch (error) {
			res.status(500).json({ message: "Something went wrong" });
		}
	},
};

export default ctaUsuarioController;
