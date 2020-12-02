import User from '../models/user.js';

// POST
// create new user
export const createUser = async (data) => User.create(data);

// GET
// Get userByEmail
export const getUserByEmail = async (email, usePassword) => {
  if (usePassword) {
    return User.findOne(email).select('+password');
  }
  return User.findOne(email);
};

// Get userById
export const getUserById = async (id) => User.findById(id);
