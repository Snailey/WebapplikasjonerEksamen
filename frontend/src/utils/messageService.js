import http from './http';

export const create = async (data) => {
  console.log(data);
  try {
    return await http.post(`/message`, { ...data });
  } catch (err) {
    return err.response;
  }
};

export const MsgList = async () => {
  try {
    return await http.get(`/message`);
  } catch (err) {
    return err.response;
  }
};

export default { create, MsgList };
