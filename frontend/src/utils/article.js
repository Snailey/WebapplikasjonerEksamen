import http from './http';

export const create = async (data) => {
  console.log(data);
  try {
    return await http.post(`/articles`, { ...data });
  } catch (err) {
    return err.response;
  }
};

export const getPublic = async () => {
  try {
    return await http.get(`articles/public/`);
  } catch (err) {
    return err.response.data;
  }
};

export const getAll = async () => {
  try {
    return await http.get(`articles/all/`);
  } catch (err) {
    return err.response.data;
  }
};
