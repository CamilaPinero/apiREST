import { config } from "dotenv";

export const PORT = process.env.PORT || 3000;
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWOORD = process.env.DB_PASSWOORD || "";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_DATABASE = process.env.DB_DATABASE || "bancoargentina";
export const DB_PORT = process.env.DB_PORT || 3306;

config();
