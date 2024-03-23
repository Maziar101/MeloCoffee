import express from "express";
const productRoutes = express.Router();

productRoutes.route("/").get().post();
productRoutes.route("/:id/:name").get().patch();

export default productRoutes;