import {Router} from 'express';

import userValidations from "./user.validator.js";
import validator from "../../middleware/validate.middleware.js";
import userController from "./user.controller.js";
import authenticate from "../../middleware/auth.middleware.js";

const router = Router();

router.post("/register",validator(userValidations.register),userController.register);
router.post("/login",validator(userValidations.login),userController.login);
router.get("/me",authenticate,userController.getCurrentUser);

export default router;


