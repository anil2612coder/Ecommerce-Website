import express from "express";

import dotenv from "dotenv";

import connectDB from "./config/db.js";

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

// middelwares

app.use(express.json());

//rest api
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to ecommerce app</h1>");
// });

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});