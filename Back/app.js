import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import sliderRoutes from "./routes/sliderRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
const app = express();

// Basic

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes

app.get("/api/auth", authRoutes);
app.get("/api/products", productRoutes);
app.get("/api/sliders", sliderRoutes);
app.get("/api/categories", categoryRoutes);
app.get("*", (req, res) => {
  res.status(404).json({
    message: "Api Address Not Found",
  });
});

export default app;
