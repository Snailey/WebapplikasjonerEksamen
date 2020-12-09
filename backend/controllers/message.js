import { messageService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import { sendMail } from '../utils/sendEmail.js';

// POST
// create message
export const create = catchAsyncErrors(async (req, res, next) => {
  const message = await messageService.createMessage(req.body);
  await sendMail({
    email: message.email,
    text: message.message,
    name: message.author,
  });
  res.status(201).json(message);
});

// GET
// get all messages
export const list = catchAsyncErrors(async (req, res, next) => {
  const messages = await messageService.listMessages();
  res.status(200).json({ success: true, data: messages });
});
