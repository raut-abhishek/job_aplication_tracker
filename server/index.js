import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// Connect DB
await connectDB();

// Global Middlewares
app.use(cors());
app.use(express.json());

// Health Route
app.get("/", (req, res) => {
  res.json({ message: "AI Job Tracker API Running..." });
});

const PORT = process.env.PORT ?? 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);