import http from './http';

export const register = async (data) => {
  console.log(data);
  try {
    return await http.post(`/auth/register`, { ...data });
  } catch (err) {
    return err.response;
  }
};

export const login = async (data) => {
  console.log(data);
  try {
    const result = await http.post(`/auth/login`, { ...data });
    console.log(JSON.stringify(result));
    return result;
  } catch (err) {
    console.log(err.response);
    return err.response;
  }
};

export const getUserInfo = async () => {
  try {
    return await http.get('/auth/me');
  } catch (err) {
    return err.response;
  }
};

export const logout = async () => {
  try {
    return await http.post('/auth/logout');
  } catch (err) {
    return err.response;
  }
};

export default {
  register,
  login,
  getUserInfo,
  logout,
};
