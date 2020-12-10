import http from './http';
// import { getCsrfToken } from './users';

export const create = async (data) => {
  try {
    // await getCsrfToken();
    return await http.post(`/log`, { ...data });
  } catch (err) {
    return err.response;
  }
};

export const topTen = async () => {
  try {
    // await getCsrfToken();
    return await http.get(`/log/list/?sort=-views&limit=10`);
  } catch (err) {
    return err.response;
  }
};

export const list = async () => {
  try {
    // await getCsrfToken();
    return await http.get(`/log/csv/`);
  } catch (err) {
    return err.response;
  }
};

export const get = async (id) => {
  try {
    // await getCsrfToken();
    return await http.get(`/log/${id}`);
  } catch (err) {
    return err.response;
  }
};

export default { create, get, list };
