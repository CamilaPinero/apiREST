import { createPool } from "mysql2/promise";
import {
	DB_HOST,
	DB_USER,
	DB_PASSWOORD,
	DB_PORT,
	DB_DATABASE,
} from "./config.js";

export const pool = createPool({
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASSWOORD,
	port: DB_PORT,
	database: DB_DATABASE,
});
