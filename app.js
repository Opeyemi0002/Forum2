import express from "express";
import { dbConnect } from "./Config/dbConnect.js";
import dotenv from "dotenv";
dotenv.config();
dbConnect();

const app = express();
const PORT = process.env.Port || 3000;

app.use(express.json());

app.listen(PORT, ()=> console.log(`you are connected to server at ${PORT}`))