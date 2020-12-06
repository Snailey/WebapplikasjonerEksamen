import Message from '../models/message.js';

// POST
// create message
export const createMessage = async (data) => Message.create(data);

// GET
// get list of all messages
export const listMessages = async () => Message.find();
