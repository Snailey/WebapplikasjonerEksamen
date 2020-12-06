import Log from '../models/log.js';

// POST
// create log
export const createLog = async (data) => Log.create(data);

// GET
// get log by url
export const getLogByUrl = async (url) => Log.findOne({ url });

// get log by id
export const getLogById = async (id) => Log.findById(id);

// get list of all logs
export const listLogs = async () => Log.find();

// get list of all logs to csv
export const listCSV = async () => Log.find().select('url time views');

// PUT
// edit log
export const updateLog = async (id, data) =>
  Log.findByIdAndUpdate(id, data, {
    new: true,
  });
