import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import sliderRoutes from "./routes/sliderRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import specialCoffeeRoutes from "./routes/specialCoffeeRoutes.js";
const app = express();

// Basic

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/sliders", sliderRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/special-coffees",specialCoffeeRoutes);
app.use("*", (req, res) => {
  res.status(404).json({
    message: "Api Address Not Found",
  });
});

export default app;
