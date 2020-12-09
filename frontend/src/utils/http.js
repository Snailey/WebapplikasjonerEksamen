// hentet fra forelesningseksempelet
import Axios from 'axios';

const http = Axios.create({
  baseURL: `http://localhost:5000/api/v1/`,
  // baseURL: `http://localhost:5000/api/v1/`,
  withCredentials: true,
});

export default http;
