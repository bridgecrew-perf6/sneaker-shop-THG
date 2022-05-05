import axiosClient from "./axiosClient";

const textApi = {
  getAll() {
    const url = "/bestSeller";
    return axiosClient.get(url);
  },

  getDetail() {
    const url = "/sneakerDetail";
    return axiosClient.get(url);
  },
};

export default textApi;
