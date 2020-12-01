import User from '../models/user.js';

// POST
// create new user
export const createUser = async (data) => User.create(data);
