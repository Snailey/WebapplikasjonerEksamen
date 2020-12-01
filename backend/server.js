import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config.js';
import connectDB from "./config/database..js";

const app = express();

app.use(cors({
    origin:'http://localhost:3000',
    allowedHeaders: ['Content-Type']
  }));

  connectDB();

  app.listen(
    process.env.PORT,
    console.log(`Server running on port ${process.env.PORT}`)
  );
