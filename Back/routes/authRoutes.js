import express from "express";
const authRoutes = express.Router();

authRoutes.route("/").post();
authRoutes.route("/register").post();

export default authRoutes;