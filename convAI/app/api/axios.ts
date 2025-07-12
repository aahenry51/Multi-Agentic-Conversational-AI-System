import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});

export const axiosAPI = {
  get: async (endPoint:string) => {
    return instance
      .get(endPoint)
      .then((response) => response)
      .catch((error) => Promise.reject(error));
  },

  post: async (endPoint:string, data:string) => {
    return instance
      .post(endPoint, data)
      .then((response) => response)
      .catch((error) => Promise.reject(error));
  },
};