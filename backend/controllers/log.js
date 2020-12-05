import { logService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';

// POST
// create log
export const create = catchAsyncErrors(async (req, res, next) => {
  const { url, time } = req.body;
  const check = await logService.getLogByUrl(url);
  if (check) {
    const views = check.views + 1;
    const newTime = check.time + time;
    const updatedLog = await logService.updateLog(check.id, {
      url,
      time: newTime,
      views,
    });
    res.status(201).json({ success: true, data: updatedLog });
  } else {
    const viewsFirst = 1;
    const log = await logService.createLog({
      url,
      time,
      views: viewsFirst,
    });
    res.status(201).json({ success: true, data: log });
  }
});

// GET
// get log by ID
export const findByUrl = catchAsyncErrors(async (req, res, next) => {
  const { url } = req.body;
  const log = await logService.getLogByUrl(url);
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
  const { url } = req.body;
  let log = await logService.getLogByUrl(url);
  if (!log) {
    res.status(404).json('Finner ikke Logg til denne siden');
  }
  log = await logService.updateLog(log.id, req.body);
  res.status(200).json({ success: true, data: log });
});
