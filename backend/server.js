import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import hpp from 'hpp';
import xssClean from 'xss-clean';
import csrf from 'csurf';
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';

import 'dotenv/config.js';

import connectDB from './config/database.js';
import article from './routes/article.js';
import user from './routes/user.js';
import office from './routes/office.js';
import auth from './routes/auth.js';
import message from './routes/message.js';
import log from './routes/log.js';

const app = express();
app.use(helmet()); // secures app with HTTP headers
app.use(mongoSanitize()); // stops noSql injections
app.use(xssClean()); // stops xss attacks - removes scripts
app.use(hpp()); // stops Pollution attacks

const limiter = rateLimit({
  windowsMs: 10 * 60 * 1000, // only 10 request every minute
  max: 100, // only 100 attempts from user
});

app.use(limiter); // stops bruteForce Attacks

app.use(express.json());
// app.use(express.static(`${__dirname}/public`));

connectDB();

app.use(
  cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'],
    credentials: true,
  })
);

app.use(cookieParser());

// app.use(csrf({ cookie: true })); // stops Cross-Site Request Forgery attacks

// app.get(`${process.env.BASEURL}/csrf-token`, (req, res) => {
//   res.status(200).json({ data: req.csrfToken() });
// });

app.use(`${process.env.BASEURL}/articles`, article);
app.use(`${process.env.BASEURL}/users`, user);
app.use(`${process.env.BASEURL}/offices`, office);
app.use(`${process.env.BASEURL}/message`, message);
app.use(`${process.env.BASEURL}/log`, log);
app.use(`${process.env.BASEURL}/auth`, auth);

app.listen(
  process.env.PORT,
  console.log(`Server running on port ${process.env.PORT}`)
);
