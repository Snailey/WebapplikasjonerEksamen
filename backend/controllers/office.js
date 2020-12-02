import { officeService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';

// POST
// create office
export const create = catchAsyncErrors(async (req, res, next) => {
  const office = await officeService.createOffice(req.body);
  res.status(201).json(office);
});

// GET
// get list of offices
export const list = catchAsyncErrors(async (req, res, next) => {
  const offices = await officeService.listOffices(req.query);
  res.status(200).json({ success: true, data: offices });
});

// find office by id
export const findById = catchAsyncErrors(async (req, res, next) => {
  const office = await officeService.getOfficeById(req.params.id);
  res.status(201).json({ success: true, data: office });
});
