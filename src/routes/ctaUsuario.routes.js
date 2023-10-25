import { Router } from "express";

import ctaUsuarioController from "../controllers/ctausuario.controller.js";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    CuentaUsuario:
 *      type: object
 *      properties:
 *        user:
 *          type: string
 *        cuenta:
 *          type: integer
 *        pesos:
 *          type: integer
 *      example:
 *        user: Pepe
 *        password: hola123
 *
 *
 */

/**
 * @swagger
 * /ctaUsuario:
 *  get:
 *   summary: Devuelve todas las cuentas con sus usuarios y pesos
 *   tags: [CuentaUsuario]
 *   responses:
 *         200:
 *          description: Listado de todas las cuentas con sus usuarios
 *          content:
 *            application/json:
 *              schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/CuentaUsuario'
 *
 *  */
router.get("/ctaUsuario", ctaUsuarioController.getCtaUsuario);

/**
 * @swagger
 * /ctaUsuario/{id}:
 *  get:
 *   summary: Devuelve una cuenta con su usuario y pesos
 *   tags: [CuentaUsuario]
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: number
 *       required: true
 *       description: El id de la cuenta usuario
 *   responses:
 *     200:
 *       description: Usuario relacionado al id provisto
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/CuentaUsuario'
 *     404:
 *       description: Cuenta no encontrada
 */
router.get("/ctaUsuario/:id", ctaUsuarioController.getCtaUsuarioById);

export default router;
