import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000',
  // baseURL: 'https://sneaker-shop-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
