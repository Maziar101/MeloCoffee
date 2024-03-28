import express from "express";
import { getAllSliders } from "../controllers/sliderCn.js";
const sliderRoutes = express.Router();

sliderRoutes.route("/").get(getAllSliders);


export default sliderRoutes;