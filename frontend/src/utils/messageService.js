import http from './http';

const API_URL = '/message';

export const create = async (data) => {
  try {
    return await http.post(API_URL, data);
  } catch (err) {
    return err.response;
  }
};

export default create;
