import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import router from "./src/routes/event.js";
import { mongodbConnection } from "./src/database/db.js";


const app = express();


const allowedOrigins = [
  "https://findmyevent-coral.vercel.app",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

//  Body parser
app.use(express.json());

mongodbConnection()

app.use(express.json()); 

app.use("/api/v1/event", router)

//  Basic test route
app.get("/", (req, res) => {
    res.send("Hello! Backend server running...");
});

//  Server listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(` Server started on port ${PORT}`);
});