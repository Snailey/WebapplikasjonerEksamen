import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cors({
    origin:'http://localhost:3000',
    allowedHeaders: ['Content-Type']
  }));

const server = app.listen(5000, () => {
   console.log(`Server running on port 5000`);
});
