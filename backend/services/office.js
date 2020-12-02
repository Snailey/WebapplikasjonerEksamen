import Office from '../models/office.js';

// GET
// get office by ID
export const getOfficeById = async (id) => Office.findById(id);

// get list of all offices
export const listOffices = async () => Office.find();
