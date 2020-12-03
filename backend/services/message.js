import Message from '../models/message.js';

// POST
// create message
export const createMessage = async (data) => Message.create(data);
