import express from "express";
import cors from "cors";
import morgan from "morgan";
const app = express();

// Basic

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes




export default app;