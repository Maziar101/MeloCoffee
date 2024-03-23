import express from "express";
const userRoutes = express.Router();

userRoutes.route("/").get();
userRoutes.route("/:id").get();

export default userRoutes;