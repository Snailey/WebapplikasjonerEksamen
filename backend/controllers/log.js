import { logService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';

// POST
// create log
export const create = catchAsyncErrors(async (req, res, next) => {
  const log = await logService.createLog(req.body);
  res.status(201).json(log);
});

// GET
// get log by ID
export const findByUrl = catchAsyncErrors(async (req, res, next) => {
  const log = await logService.getLogByUrl(req.params.url);
  res.status(201).json({ success: true, data: log });
});

// get list of all logs
export const list = catchAsyncErrors(async (req, res, next) => {
  const logs = await logService.listLogs();
  res.status(200).json({ success: true, data: logs });
});

// PUT
// edit log by url
export const update = catchAsyncErrors(async (req, res, next) => {
  let log = await logService.getLogByUrl(req.params.url);
  if (!log) {
    res.status(404).json('Finner ikke Logg til denne siden');
  }
  log = await logService.updateLog(req.params.id, req.body);
  res.status(200).json(log);
});
