import axiosClient from './axiosClient';

const textApi = {
  getDetail(id: number) {
    const url = `/sneakerList/${id}`;
    return axiosClient.get(url);
  },
};

export default textApi;
