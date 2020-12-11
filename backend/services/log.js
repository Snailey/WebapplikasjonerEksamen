import Log from '../models/log.js';
import { Filter } from '../utils/filter.js';

// POST
// create log
export const createLog = async (data) => Log.create(data);

// GET
// get log by url
export const getLogByUrl = async (url) => Log.findOne({ url });

// get log by id
export const getLogById = async (id) => Log.findById(id);

// get list of all logs / filter
export const listLogs = async (queryString) => {
  const { limit, page } = queryString;
  const filter = new Filter(Log.find(), queryString).sort().filter().limit();
  const logs = await filter.query;
  const paginate = await filter.paginate().query;

  return {
    results: logs.length,
    totalPages: Math.ceil(logs.length / limit) || 1,
    currentPage: page && page > 0 ? parseInt(page) : 1,
    data: paginate,
  };
};

// get list of all logs to csv
export const listCSV = async () => Log.find().select('url time views');

// PUT
// edit log
export const updateLog = async (id, data) =>
  Log.findByIdAndUpdate(id, data, {
    new: true,
  });

// add user views
export const addUserViews = async (email, url) =>
  Log.findOne(url, {
    new: true,
  });
