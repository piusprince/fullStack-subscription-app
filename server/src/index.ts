import express from "express";
import authRoutes from "./routes/auth";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("Connected to MongoDB");

    const app = express();

    app.use(express.json());
    app.use("/auth", authRoutes);
    app.listen(8080, () => {
      console.log("Listening on port 8080");
    });
  })
  .catch((error) => {
    throw new Error(error);
  });
