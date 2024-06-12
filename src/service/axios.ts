import axios from 'axios';
import Config from 'react-native-config';

const ax = axios.create({
  baseURL: Config.API_URL,
});

ax.interceptors.request.use(
  async configuration => {
    console.log('url :', Config.API_URL);
    configuration.headers['Content-Type'] = 'application/json';
    return configuration;
  },
  error => {
    Promise.reject(error);
  },
);

export default ax;
