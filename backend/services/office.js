import Office from '../models/office.js';

// POST
// create office
export const createOffice = async (data) => Office.create(data);

// GET
// get office by ID
export const getOfficeById = async (id) => Office.findById(id);

// get list of all offices
export const listOffices = async () => Office.find();

// get list of offices in city

// get list of employees belonging to office by id
