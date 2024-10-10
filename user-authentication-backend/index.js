import express, { json } from "express";
import { config } from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";

const app = express();
config();
connectDB();

app.use(express.json());

const isProduction = process.env.NODE_ENV === "production"; //Use for production
// const isProduction = process.env.NODE_ENV != "production"; //Use for local run

// Configure CORS
app.use(
  cors({
    origin: isProduction ? "https://domain.com" : "http://localhost:YourPort",
    credentials: true,
  })
);

app.use(json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
