import express from "express";
import {
  loginController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";
const router = express.Router();

//all routes
//Register ; method POST
router.post("/register", registerController);

//Login ; method POST
router.post("/login", loginController);

//test routes
router.get("/test", requireSignIn, testController);
export default router;
