import { Router } from 'express';
import todoValidator from "./todo.validator.js";
import todoController from "./todo.controller.js";
import validator from "../../middleware/validate.middleware.js";
import authenticate from "../../middleware/auth.middleware.js";


const router = Router();


router.post("/",authenticate,validator(todoValidator.createtodo),todoController.createTodo);
router.get("/",authenticate,todoController.getAllTodos);
router.get("/:id",authenticate,todoController.getTodoById);
router.delete("/:id",authenticate,todoController.deleteTodo);
router.put("/:id",authenticate,validator(todoValidator.updatetodo),todoController.updateTodo);

export default router;