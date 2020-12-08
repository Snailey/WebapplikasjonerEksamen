import http from './http';

export const list = async () => {
  try {
    return await http.get(`offices/`);
  } catch (err) {
    return err.response.data;
  }
};

export const get = async (id) => {
  try {
    return await http.get(`/offices/${id}`);
  } catch (err) {
    return err.response;
  }
};
