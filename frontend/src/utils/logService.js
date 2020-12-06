import http from './http';

export const create = async (data) => {
  console.log(data);
  try {
    return await http.post(`/log`, { ...data });
  } catch (err) {
    return err.response;
  }
};

export const list = async () => {
  try {
    return await http.get(`/log/csv`); // list
  } catch (err) {
    return err.response;
  }
};

export const get = async (id) => {
  try {
    return await http.get(`/log/${id}`);
  } catch (err) {
    return err.response;
  }
};

export default { create, get, list };
