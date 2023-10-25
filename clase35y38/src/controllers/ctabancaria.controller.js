import { pool } from "../db.js";

const ctabancariaController = {
	getCtasBancarias: async (req, res) => {
		try {
			const [result] = await pool.query("SELECT * FROM cuentabancaria");
			res.json(result);
		} catch (error) {
			res.status(500).json({ message: "Something went wrong" });
		}
	},
	getCtaBancariaById: async (req, res) => {
		try {
			const { id } = req.params;
			const [result] = await pool.query(
				"SELECT * FROM cuentabancaria WHERE id = ?",
				[id]
			);
			res.json(result);
		} catch (error) {
			res.status(500).json({ message: "Something went wrong" });
		}
	},
	postCtaBancaria: async (req, res) => {
		try {
			const {
				cuenta,
				cbu,
				numTarjeta,
				pesos,
				dolares,
				plazoFijo,
				id_usuario,
			} = req.body;
			const [result] = await pool.query(
				"INSERT INTO cuentabancaria (cuenta, cbu, numTarjeta, pesos, dolares, plazoFijo) VALUE (?, ?, ?, ?, ?, ?)",
				[cuenta, cbu, numTarjeta, pesos, dolares, plazoFijo]
			);
			const [result2] = await pool.query(
				"INSERT INTO cuentausuario (id_cuentabancaria, id_usuario) VALUE (?, ?)",
				[result.insertId, id_usuario]
			);
			res.json([result, result2]);
		} catch (error) {
			res.status(500).json({ message: "Something went wrong", error });
		}
	},
	putCtaBancaria: async (req, res) => {
		try {
			const { id } = req.params;
			const { cuenta, cbu, numTarjeta, pesos, dolares, plazoFijo } =
				req.body;
			const [result] = await pool.query(
				"UPDATE cuentabancaria SET cuenta = ?, cbu = ?, numTarjeta = ?, pesos = ?, dolares = ?, plazoFijo = ? WHERE id = ?",
				[cuenta, cbu, numTarjeta, pesos, dolares, plazoFijo, id]
			);
			res.json(result);
		} catch (error) {
			res.status(500).json({ message: "Something went wrong" });
		}
	},
	deleteCtaBancaria: async (req, res) => {
		try {
			const { id } = req.params;
			const [result] = await pool.query(
				"DELETE FROM cuentausuario WHERE id_cuentabancaria = ?",
				[id]
			);
			const [result2] = await pool.query(
				"DELETE FROM cuentabancaria WHERE id = ?",
				[id]
			);
			res.send("Cuenta bancaria deleted");
		} catch (error) {
			res.status(500).json({ message: "Something went wrong", error });
		}
	},
};

export default ctabancariaController;
