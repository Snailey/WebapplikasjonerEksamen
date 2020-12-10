import http from './http';
// import { getCsrfToken } from './users';

export const create = async (data) => {
  console.log(data);
  try {
    // await getCsrfToken();
    return await http.post(`/articles`, { ...data });
  } catch (err) {
    return err.response;
  }
};

export const getPublic = async () => {
  try {
    // await getCsrfToken();
    return await http.get(`articles/public/`);
  } catch (err) {
    return err.response.data;
  }
};

export const getAll = async () => {
  try {
    // await getCsrfToken();
    return await http.get(`articles/all/`);
  } catch (err) {
    return err.response.data;
  }
};
