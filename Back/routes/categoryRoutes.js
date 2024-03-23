import express from "express";
const categoryRoutes = express.Router();

categoryRoutes.route("/").get().post();



export default categoryRoutes;