// hentet fra forelesningseksempelet
import Axios from 'axios';

const http = Axios.create({
  baseURL: `${process.env.SERVER_URL}`,
  withCredentials: true,
});

export default http;
