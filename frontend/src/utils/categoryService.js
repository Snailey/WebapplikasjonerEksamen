import http from './http';

export const create = async (data) => {
  console.log(data);
  try {
    // await getCsrfToken();
    return await http.post(`/categories`, { ...data });
  } catch (err) {
    return err.response;
  }
};

export const catList = async () => {
  try {
    // await getCsrfToken();
    const result = await http.get(`/categories`);
    console.log(result);
    return result;
  } catch (err) {
    return err.response;
  }
};
