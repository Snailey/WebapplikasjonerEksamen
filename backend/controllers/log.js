import { logService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';

// POST
// create log
export const create = catchAsyncErrors(async (req, res, next) => {
  const { url, time, users } = req.body;
  const check = await logService.getLogByUrl(url);
  if (check) {
    // if log for the url exist, it gets updated instead
    const views = check.views + 1;
    const newTime = check.time + time;
    const newUsers = check.users + users; // logikken funker ikke for å legge til fler brukere i arrayen av brukere - heller ikke sjekk om brukeren som skal legges til finnes i lista fra før...
    const updatedLog = await logService.updateLog(check.id, {
      url,
      time: newTime,
      views,
      users: newUsers,
    });
    res.status(201).json({ success: true, data: updatedLog });
  } else {
    const viewsFirst = 1;
    const log = await logService.createLog({
      url,
      time,
      views: viewsFirst,
      users,
    });
    res.status(201).json({ success: true, data: log });
  }
});

// GET
// get log by url
export const findByUrl = catchAsyncErrors(async (req, res, next) => {
  const { url } = req.body;
  const log = await logService.getLogByUrl(url);
  res.status(201).json({ success: true, data: log });
});

// get log by Id
export const findById = catchAsyncErrors(async (req, res, next) => {
  const log = await logService.getLogById(req.params.id);
  if (!log) {
    res.status(404).json(`Finner ikke log med id:  ${req.params.id}`);
  }
  res.status(201).json({ success: true, data: log });
});

// get list of all logs
export const list = catchAsyncErrors(async (req, res, next) => {
  const logs = await logService.listLogs();
  res.status(200).json({ success: true, data: logs });
});

// get list of all logs  to CSV
export const listCSV = catchAsyncErrors(async (req, res, next) => {
  const logs = await logService.listCSV();
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
