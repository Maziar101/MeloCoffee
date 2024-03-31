import express from "express";
import {getAllSpecialCoffees} from "../controllers/specialCoffeeCn.js";
const specialCoffeeRoutes = express.Router();

specialCoffeeRoutes.route("/").get(getAllSpecialCoffees);


export default specialCoffeeRoutes;