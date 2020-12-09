import { messageService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';

// POST
// create message
export const create = catchAsyncErrors(async (req, res, next) => {
  const message = await messageService.createMessage(req.body);
  console.log(req.body);
  res.status(201).json(message);
});

// GET
// get all messages
export const list = catchAsyncErrors(async (req, res, next) => {
  const messages = await messageService.listMessages();
  res.status(200).json({ success: true, data: messages });
});
