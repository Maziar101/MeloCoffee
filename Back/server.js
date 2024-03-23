import dotenv from "dotenv";
import app from "./app";
import mongoose from "mongoose";

const Port = process.env.PORT || 5000;
dotenv.config({ path: "./config.env" });
mongoose
  .connect(process.env.DATA_BASE)
  .then((err) => {
    console.log("Database Is Connected!");
  })
  .catch((err) => {
    console.log("Failed To Connect Database");
  });
app.listen(Port, () => {
  console.log(`Server Is Running On Port ${Port}`);
});
