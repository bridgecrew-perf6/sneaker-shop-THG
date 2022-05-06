import axiosClient from './axiosClient';

const bestSeller = {
  getBestSeller() {
    const url = '/sneakerList?_limit=6';
    return axiosClient.get(url);
  },
};

export default bestSeller;
