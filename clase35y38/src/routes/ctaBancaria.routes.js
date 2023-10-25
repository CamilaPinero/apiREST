import { Router } from "express";

import ctabancariaController from "../controllers/ctabancaria.controller.js";

const router = Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          CuentaBancaria:
 *              type: object
 *              properties:
 *                  cuenta:
 *                      type: integer
 *                  cbu:
 *                      type: integer
 *                  numTarjeta:
 *                      type: integer
 *                  pesos:
 *                      type: integer
 *                  dolares:
 *                      type: integer
 *                  plazoFijo:
 *                      type: integer
 *                  example:
 *                      cuenta: 34838372
 *                      cbu: 340040499994738
 *                      numTarjeta: 29397478
 *                      pesos: 15500
 *                      dolares: 0
 *                      plazoFijo: 0
 *
 *
 */

/**
 * @swagger
 * /ctaBancaria:
 *  get:
 *   summary: Devuelve todas las cuentas bancarias
 *   tags: [CuentaBancaria]
 *   responses:
 *         200:
 *          description: Listado de todas las cuentas bancarias
 *          content:
 *            application/json:
 *              schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/ctaBancaria'
 *
 *  */
router.get("/ctaBancaria", ctabancariaController.getCtasBancarias);

/**
 * @swagger
 * /ctaBancaria/{id}:
 *  get:
 *   summary: Devuelve una cuenta bancaria
 *   tags: [CuentaBancaria]
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: number
 *       required: true
 *       description: El id de la cuenta
 *   responses:
 *     200:
 *       description: Cuenta relacionado al id provisto
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/ctaBancaria'
 *     404:
 *       description: Cuenta no encontrada
 */
router.get("/ctaBancaria/:id", ctabancariaController.getCtaBancariaById);

/**
 * @swagger
 * /ctaBancaria:
 *  post:
 *      summary: Crea una nueva cuenta
 *      tags: [CuentaBancaria]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/CuentaBancaria'
 *                      properties:
 *                          cuenta:
 *                              type: integer
 *                          cbu:
 *                              type: integer
 *                          numTarjeta:
 *                              type: integer
 *                          pesos:
 *                              type: integer
 *                          dolares:
 *                              type: integer
 *                          plazoFijo:
 *                              type: integer
 *                          example:
 *                              cuenta: 36666666
 *                              cbu: 3555555404738
 *                              numTarjeta: 29397478
 *                              pesos: 15555
 *                              dolares: 0
 *                              plazoFijo: 5
 *
 *      responses:
 *          200:
 *              description: Nueva cuenta bancaria creada
 */
router.post("/ctaBancaria", ctabancariaController.postCtaBancaria);

/**
 * @swagger
 * /ctaBancaria/{id}:
 *  put:
 *   summary: Modifica un usuario
 *   tags: [CuentaBancaria]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *        type: object
 *        $ref: '#/components/schemas/CuentaBancaria'
 *        properties:
 *          cuenta:
 *              type: integer
 *          cbu:
 *              type: integer
 *          numTarjeta:
 *              type: integer
 *          pesos:
 *              type: integer
 *          dolares:
 *              type: integer
 *          plazoFijo:
 *              type: integer
 *      example:
 *          cuenta: 3888888
 *          cbu: 3888885404738
 *          numTarjeta: 29397478
 *          pesos: 1888
 *          dolares: 0
 *          plazoFijo: 5
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: number
 *       required: true
 *       description: El id de la cuenta
 *   responses:
 *     200:
 *       description: Cuenta bancaria modificado
 *     404:
 *        description: Cuenta no encontrada
 */
router.put("/ctaBancaria/:id", ctabancariaController.putCtaBancaria);

/**
 * @swagger
 * /ctaBancaria/{id}:
 *  delete:
 *   summary: Borra un usuario
 *   tags: [CuentaBancaria]
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: number
 *       required: true
 *       description: El id de la cuenta
 *   responses:
 *     204:
 *       description: Cuenta bancaria borrado
 *     404:
 *        description: Cuenta bancaria no encontrado
 */
router.delete("/ctaBancaria/:id", ctabancariaController.deleteCtaBancaria);

export default router;
