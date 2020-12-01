import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import connectDB from './config/database..js';
import article from './routes/article.js';
import user from './routes/user.js';
import office from './routes/office.js';

const app = express();

connectDB();

app.use(
  cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type'],
  })
);

app.use(`${process.env.BASEURL}/articles`, article);
app.use(`${process.env.BASEURL}/users`, user);
app.use(`${process.env.BASEURL}/offices`, office);

app.listen(
  process.env.PORT,
  console.log(`Server running on port ${process.env.PORT}`)
);
