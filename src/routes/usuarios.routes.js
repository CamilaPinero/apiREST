import { Router } from "express";

import usuarioController from "../controllers/usuarios.controller.js";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Usuarios:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        user:
 *          type: string
 *        password:
 *          type: string
 *      example:
 *        user: Pepe
 *        password: hola123
 *
 *
 */

/**
 * @swagger
 * /usuarios:
 *  get:
 *   summary: Devuelve todos los usuarios
 *   tags: [Usuarios]
 *   responses:
 *         200:
 *          description: Listado de todos los usuarios
 *          content:
 *            application/json:
 *              schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/Usuarios'
 *
 *  */
router.get("/usuarios", usuarioController.getUsuarios);

/**
 * @swagger
 * /usuarios/{id}:
 *  get:
 *   summary: Devuelve un solo usuario
 *   tags: [Usuarios]
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: number
 *       required: true
 *       description: El id del usuario
 *   responses:
 *     200:
 *       description: Usuario relacionado al id provisto
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Usuarios'
 *     404:
 *       description: Usuario no encontrado
 */
router.get("/usuarios/:id", usuarioController.getUsuarioById);

/**
 * @swagger
 * /usuarios:
 *  post:
 *      summary: Crea un nuevo usuario
 *      tags: [Usuarios]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Usuarios'
 *                      properties:
 *                          user:
 *                              type: string
 *                          password:
 *                              type: string
 *                  example:
 *                       user: Pepa
 *                       password: hola123
 *
 *      responses:
 *          200:
 *              description: Nuevo usuario creado
 */
router.post("/usuarios", usuarioController.postUsuario);

/**
 * @swagger
 * /usuarios/{id}:
 *  put:
 *   summary: Modifica un usuario
 *   tags: [Usuarios]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *        type: object
 *        $ref: '#/components/schemas/Usuarios'
 *        properties:
 *          user:
 *              type: string
 *          password:
 *              type: string
 *      example:
 *          user: Pepita
 *          password: hola123
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: number
 *       required: true
 *       description: El id del usuario
 *   responses:
 *     200:
 *       description: Usuario modificado
 *     404:
 *        description: Usuario no encontrado
 */
router.put("/usuarios/:id", usuarioController.putUsuario);

/**
 * @swagger
 * /usuarios/{id}:
 *  delete:
 *   summary: Borra un usuario
 *   tags: [Usuarios]
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: number
 *       required: true
 *       description: El id del usuario
 *   responses:
 *     204:
 *       description: Usuario borrado
 *     404:
 *        description: Usuario no encontrado
 */
router.delete("/usuarios/:id", usuarioController.deleteUsuario);

export default router;
