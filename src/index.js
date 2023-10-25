import express from "express";
import usuariosRoutes from "./routes/usuarios.routes.js";
import ctaBancariaRoutes from "./routes/ctaBancaria.routes.js";
import ctaUsuarioRoutes from "./routes/ctaUsuario.routes.js";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use("/usuarios", usuariosRoutes);

const swaggerSpec = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Node Swagger API",
			version: "1.0.0",
		},
		servers: [
			{
				url: "http://localhost:3000",
			},
		],
	},
	apis: [`${path.join(__dirname, "./routes/*.js")}`],
};

app.use(
	"/api-doc",
	swaggerUI.serve,
	swaggerUI.setup(swaggerJsDoc(swaggerSpec))
);

app.use(express.json());

app.use(usuariosRoutes);
app.use(ctaBancariaRoutes);
app.use(ctaUsuarioRoutes);

app.use((req, res, next) => {
	res.status(404).json({ message: "Not Found" });
});

app.listen(3000, () => {
	console.log("Server on port 3000");
});
