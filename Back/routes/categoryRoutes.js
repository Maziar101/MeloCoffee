import express from "express";
import { deleteCategory, getAllCategory, createCategory} from "../controllers/categoryCn.js";
const categoryRoutes = express.Router();

categoryRoutes.route("/").get(getAllCategory).post(createCategory).delete(deleteCategory);



export default categoryRoutes;