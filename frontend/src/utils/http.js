// hentet fra forelesningseksempelet
import Axios from 'axios';

const http = Axios.create({
  // baseURL: `${process.env.SERVER_URL}`,
  baseURL: `http://localhost:5000/api/v1/`,
  withCredentials: true,
});

export default http;
