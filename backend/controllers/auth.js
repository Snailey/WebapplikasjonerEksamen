// mye er hentet fra forelesnings eksempler
import catchAsyncErrors from '../middleware/catchAsync.js';
import { userService } from '../services/index.js';
import { sendToken } from '../utils/jwtToken.js';

export const register = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.createUser(req.body);
  sendToken(user, res);
});

export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json('Fyll ut epost og passord');
  }
  const user = await userService.getUserByEmail({ email }, true);
  if (!user) {
    res.status(400).json('Finner ikke epost, prøv en annen');
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    res.status(400).json('Passord er feil');
  }
  sendToken(user, res);
});

export const logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({ success: true, data: 'Logget ut' });
});

export const currentUser = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.getUserById(req.user.id);
  if (!user) {
    res.status(404).json('Finner ikke brukeren');
  }
  res.status(200).json({
    success: true,
    data: user,
  });
});
