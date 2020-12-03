import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import 'dotenv/config.js';

import connectDB from './config/database..js';
import article from './routes/article.js';
import user from './routes/user.js';
import office from './routes/office.js';
import auth from './routes/auth.js';
import message from './routes/message.js';

const app = express();

app.use(express.json());

connectDB();

app.use(
  cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(`${process.env.BASEURL}/articles`, article);
app.use(`${process.env.BASEURL}/users`, user);
app.use(`${process.env.BASEURL}/offices`, office);
app.use(`${process.env.BASEURL}/message`, message);
app.use(`${process.env.BASEURL}/`, auth);

app.listen(
  process.env.PORT,
  console.log(`Server running on port ${process.env.PORT}`)
);
