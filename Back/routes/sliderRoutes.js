import express from "express";
const sliderRoutes = express.Router();

sliderRoutes.route("/").get();


export default sliderRoutes;