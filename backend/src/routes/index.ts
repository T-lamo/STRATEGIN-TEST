import express from "express";
import { authController } from "../controllers/auth.controller";
import { userController } from "../controllers/user.controller";
import { authenticateToken } from "../middlewares/auth.mid";

export const appRoutes = express();

appRoutes.post("/login", (req, res) => {
  authController.login(req, res);
});

appRoutes.post("/register", (req, res) => {
  authController.register(req, res);
});

appRoutes.post("/users", authenticateToken, (req, res) => {
  userController.getUsers(req, res);
});
