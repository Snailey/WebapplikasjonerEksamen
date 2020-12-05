import http from './http';

const create = async (data) => {
  console.log(data);
  try {
    return await http.post(`/log`, { ...data });
  } catch (err) {
    return err.response;
  }
};

export default create;
