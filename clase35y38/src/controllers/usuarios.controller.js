import { pool } from "../db.js";

const usuarioController = {
	getUsuarios: async (req, res) => {
		try {
			const [result] = await pool.query("SELECT * FROM usuarios");
			res.json(result);
		} catch (error) {
			res.status(500).json({ message: "Something went wrong" });
		}
	},
	getUsuarioById: async (req, res) => {
		try {
			const { id } = req.params;
			const [result] = await pool.query(
				"SELECT * FROM usuarios WHERE id = ?",
				[id]
			);
			res.json(result);
		} catch (error) {
			res.status(500).json({ message: "Something went wrong" });
		}
	},
	postUsuario: async (req, res) => {
		try {
			const { user, password } = req.body;
			const [result] = await pool.query(
				"INSERT INTO usuarios (user, password) VALUE (?, ?)",
				[user, password]
			);
			res.json(result);
		} catch (error) {
			res.status(500).json({ message: "Something went wrong", error });
		}
	},
	putUsuario: async (req, res) => {
		try {
			const { id } = req.params;
			const { user, password } = req.body;
			const [result] = await pool.query(
				"UPDATE usuarios SET user = ?, password = ? WHERE id = ?",
				[user, password, id]
			);
			res.send("user updated");
		} catch (error) {
			res.status(500).json({ message: "Something went wrong" });
		}
	},
	deleteUsuario: async (req, res) => {
		try {
			const { id } = req.params;
			const [result] = await pool.query(
				"DELETE FROM cuentausuario WHERE id_usuario = ?",
				[id]
			);
			const [result2] = await pool.query(
				"DELETE FROM usuarios WHERE id = ?",
				[id]
			);
			res.send("Usuario deleted");
		} catch (error) {
			res.status(500).json({ message: "Something went wrong" });
		}
	},
};

export default usuarioController;
