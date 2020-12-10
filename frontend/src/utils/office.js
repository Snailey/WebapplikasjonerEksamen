import http from './http';
// import { getCsrfToken } from './users';

export const list = async () => {
  try {
    // await getCsrfToken();
    return await http.get(`offices/`);
  } catch (err) {
    return err.response.data;
  }
};

export const get = async (id) => {
  try {
    // await getCsrfToken();
    return await http.get(`/offices/${id}`);
  } catch (err) {
    return err.response;
  }
};
