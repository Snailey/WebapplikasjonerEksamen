import Log from '../models/log.js';

// POST
// create log
export const createLog = async (data) => Log.create(data);

// GET
// get log by url
export const getLogByUrl = async (url) => Log.findOneAndUpdate(url);

// get list of all logs
export const listLogs = async () => Log.find();

// PUT
// edit log
export const updateLog = async (url, data) =>
  Log.findOneAndUpdate(url, data, {
    new: true,
  });
