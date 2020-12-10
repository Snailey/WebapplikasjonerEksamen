import http from './http';
// import getCsrfToken from './users';

export const create = async (data) => {
  console.log(data);
  try {
    // await getCsrfToken();
    return await http.post(`/message`, { ...data });
  } catch (err) {
    return err.response;
  }
};

export const MsgList = async () => {
  try {
    // await getCsrfToken();
    return await http.get(`/message`);
  } catch (err) {
    return err.response;
  }
};

export default { create, MsgList };
