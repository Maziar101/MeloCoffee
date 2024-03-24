import express from "express";
import { Login, Register } from "../controllers/authCn.js";
const authRoutes = express.Router();

authRoutes.route("/").post(Login);
authRoutes.route("/register").post(Register);

export default authRoutes;