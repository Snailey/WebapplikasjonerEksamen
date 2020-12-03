import { messageService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';

// POST
// create message
export const create = catchAsyncErrors(async (req, res, next) => {
  const message = await messageService.createMessage(req.body);
  res.status(201).json(message);
});
