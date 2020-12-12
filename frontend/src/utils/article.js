import http from './http';
// import { getCsrfToken } from './users';

export const create = async (data) => {
  // console.log(data);
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

export const getPublished = async () => {
  try {
    // await getCsrfToken();
    return await http.get(`articles/published/`);
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

export const get = async (id) => {
  try {
    // await getCsrfToken();
    return await http.get(`/articles/${id}`);
  } catch (err) {
    return err.response;
  }
};

export const remove = async (id) => {
  try {
    // await getCsrfToken();
    return await http.delete(`/articles/${id}`);
  } catch (err) {
    return err.response;
  }
};

export default { create, get, getAll, getPublic, getPublished, remove };
