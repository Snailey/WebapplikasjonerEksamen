import { messageService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import { sendMail } from '../utils/sendEmail.js';

// POST
// create message
export const create = catchAsyncErrors(async (req, res, next) => {
  const { author, email, message } = req.body;
  if (!author || !email || !message) {
    res.status(400).json('Fyll ut navn, epost og melding');
  }
  const msg = await messageService.createMessage(req.body);
  await sendMail({
    email: msg.email,
    message: msg.message,
    name: msg.author,
  });
  res.status(201).json(message);
});

// GET
// get all messages
export const list = catchAsyncErrors(async (req, res, next) => {
  const messages = await messageService.listMessages();
  res.status(200).json({ success: true, data: messages });
});
