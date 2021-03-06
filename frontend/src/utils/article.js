import http from './http';
// import { getCsrfToken } from './users';

export const create = async (data) => {
  // console.log(data);
  try {
    // await getCsrfToken();
    const check = await http.post(`/articles`, { ...data });
    console.log(check);
  } catch (err) {
    return err.response;
  }
};

export const update = async (data) => {
  console.log(data);
  try {
    // await getCsrfToken();
    return await http.put(`/articles/${data._id}`, { ...data });
  } catch (err) {
    return err.response;
  }
};

export const getPublic = async (search: String, filter: String) => {
  try {
    // await getCsrfToken();
    if (filter === 'Alle' || search === null) {
      return await http.get(
        `articles/filter/?public=true&published=true&limit=100`
      );
    }
    if (filter === 'Alle' || search === !null) {
      return await http.get(
        `articles/filter/?public=true&published=true&q=${search}&limit=100`
      );
    }
    if (filter !== 'Alle' || search === !null) {
      return await http.get(
        `articles/filter/?public=true&published=true&category=${filter}&limit=100`
      );
    }
    return await http.get(
      `articles/filter/?public=true&published=true&category=${filter}&q=${search}&limit=100`
    );
  } catch (err) {
    return err.response.data;
  }
};

export const getPublished = async (search: String, filter: String) => {
  try {
    // await getCsrfToken();
    if (filter === 'Alle' || search === null) {
      return await http.get(`articles/filter/?published=true&limit=100`);
    }
    if (filter === 'Alle' || search === !null) {
      return await http.get(
        `articles/filter/?published=true&q=${search}&limit=100`
      );
    }
    if (filter !== 'Alle' || search === !null) {
      return await http.get(
        `articles/filter/?published=true&category=${filter}&limit=100`
      );
    }
    return await http.get(
      `articles/filter/?published=true&category=${filter}&q=${search}&limit=100`
    );
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
