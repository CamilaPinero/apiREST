import express from "express";
import employeesRoutes from "./routes/employees.routes.js";

const app = express();

app.use(express.json());

app.use(employeesRoutes);

app.use((req, res, next) => {
	res.status(404).json({ message: "Not Found" });
});

app.listen(3000, () => {
	console.log("Server on port 3000");
});
