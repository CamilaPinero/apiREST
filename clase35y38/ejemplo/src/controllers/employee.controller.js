import { pool } from "../db.js";

const employeeController = {
	getEmployees: async (req, res) => {
		try {
			const [result] = await pool.query("SELECT * FROM employees");
			res.json(result);
		} catch (error) {
			res.status(500).json({ message: "Something went wrong" });
		}
	},
	getEmployeeById: async (req, res) => {
		const { id } = req.params;
		try {
			const [result] = await pool.query(
				"SELECT * FROM employees WHERE id = ?",
				[id]
			);
			res.json(result);
		} catch (error) {
			res.status(500).json({ message: "Something went wrong" });
		}
	},
	postEmployee: async (req, res) => {
		const { name, salary } = req.body;

		try {
			const [result] = await pool.query(
				"INSERT INTO employees (name, salary) VALUE (?, ?)",
				[name, salary]
			);
			console.log(result);
			res.json(result[0]);

			console.log(req.body);
		} catch (error) {
			res.status(500).json({ message: "Something went wrong", error });
		}
	},
	putEmployee: async (req, res) => {
		try {
			const { id } = req.params;
			const { name, salary } = req.body;
			const [result] = await pool.query(
				"UPDATE employees SET name = ?, salary = ? WHERE id = ?",
				[name, salary, id]
			);
			res.send("employee updated");
		} catch (error) {
			res.status(500).json({ message: "Something went wrong" });
		}
	},
	deleteEmployee: async (req, res) => {
		try {
			const { id } = req.params;
			const [result] = await pool.query(
				"DELETE FROM employees WHERE id = ?",
				[id]
			);
			res.send("Employee deleted");
		} catch (error) {
			res.status(500).json({ message: "Something went wrong" });
		}
	},
};

export default employeeController;
