import http from './http';

export const register = async (data) => {
  console.log(data);
  try {
    return await http.post(`/register`, { ...data });
  } catch (err) {
    return err.response;
  }
};

export const login = async (data) => {
  console.log(data);
  try {
    const result = await http.post(`/login`, { ...data });
    console.log(JSON.stringify(result));
    return result;
  } catch (err) {
    console.log(err.response);
    return err.response;
  }
};
