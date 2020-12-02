import jwt from 'jsonwebtoken';
import { userService } from '../services/index.js';
import catchAsyncErrors from './catchAsync.js';

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  let token;
  if (req.cookies?.token) {
    token = req.cookies.token;
  }

  if (!token) {
    res.status(401).json( "Logg inn" );
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await userService.getUserById(decoded.id);

  if (!user) {
    res.status(404).json( "Finner ikke brukeren" );
  }

  req.user = user;
  next();
});

export const isAuthorized = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    res.status(403).json( "Du har ikke tilgang" );
  }
  next();
};
