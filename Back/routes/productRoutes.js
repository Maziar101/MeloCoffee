import express from "express";
import { createProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct } from "../controllers/productCn.js";
const productRoutes = express.Router();

productRoutes.route("/").get(getAllProducts).post(createProduct);
productRoutes.route("/:id/:name").get(getOneProduct).patch(updateProduct).delete(deleteProduct);

export default productRoutes;