import axiosClient from './axiosClient';

const allMenShoes = {
  getAllMenShoes() {
    const url = '/sneakerList';
    return axiosClient.get(url);
  },
};

export default allMenShoes;
