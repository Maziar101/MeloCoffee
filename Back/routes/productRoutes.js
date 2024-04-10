import express from "express";
import { createProduct, deleteProduct, getAllProducts, getLastProducts, getOneProduct, updateProduct } from "../controllers/productCn.js";
const productRoutes = express.Router();

productRoutes.route("/").get(getAllProducts).post(createProduct);
productRoutes.route("/:id/:name").get(getOneProduct).patch(updateProduct).delete(deleteProduct);
productRoutes.route("/last").get(getLastProducts);

export default productRoutes;