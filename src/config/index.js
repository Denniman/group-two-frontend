import axios from "axios";
import { store } from "../providers/store";

export const network = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URI}/api/v1/`,
});

// Add a request interceptor
network.interceptors.request.use(
  (config) => {
    // get the JWT token out of it

    const token = store?.getState()?.session;
    return {
      ...config,
      headers: { ...config.headers, Authorization: token?.accessToken },
    };
  },
  (error) => {
    return Promise.reject(error?.response?.data);
  }
);
