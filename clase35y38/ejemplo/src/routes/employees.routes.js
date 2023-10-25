import { Router } from "express";
import employeeController from "../controllers/employee.controller.js";

const router = Router();

router.get("/employees", employeeController.getEmployees);

router.get("/employees/:id", employeeController.getEmployeeById);

router.post("/employees", employeeController.postEmployee);

router.put("/employees/:id", employeeController.putEmployee);

router.delete("/employees/:id", employeeController.deleteEmployee);

export default router;
