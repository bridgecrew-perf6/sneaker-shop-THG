import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://sneaker-shop-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
