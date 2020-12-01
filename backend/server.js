import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cors({
    origin:'http://localhost:3000',
    allowedHeaders: ['Content-Type']
  }));

  app.listen(
    5000,
    console.log(`Server running mode on port 5000`)
  );
