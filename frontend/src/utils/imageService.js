import http from './http';

const API_UPLOAD_URL = '/upload';
const API_DOWNLOAD_URL = '/download';

export const upload = async (image) => {
  try {
    const data = new FormData();
    data.append('image', image);
    return await http.post(`${API_UPLOAD_URL}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const download = async (id) => {
  try {
    return await http.get(`${API_DOWNLOAD_URL}/${id}`, {
      responseType: 'blob',
    });
    // return await http.get(`${API_DOWNLOAD_URL}/${id}`);
  } catch (err) {
    return err.response;
  }
};

export const downloadUrl = (id) =>
  `http://localhost:5000/api/v1/${API_DOWNLOAD_URL}/${id}`;

export const get = async (id) => {
  try {
    // await getCsrfToken();
    return await http.get(`/image/${id}`);
  } catch (err) {
    return err.response;
  }
};
