import axios from "axios";

let token;

export const getStore = (store) => {
  return (token = store?.getState()?.session.accessToken);
};

// Set config defaults when creating the instance
export const network = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URI}/api/v1/`,
});

// Add a request interceptor
network.interceptors.request.use(
  (config) => {
    console.log("access_token!", token);

    return {
      ...config,
      headers: { ...config.headers, Authorization: token },
    };
  },
  (error) => {
    return Promise.reject(error?.response?.data);
  }
);
