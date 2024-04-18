import axios from "axios";
import { store } from "../providers/store/store";

// Set config defaults when creating the instance
export const network = axios.create({
    baseURL: `${import.meta.env.BASE_URL}/api/v1/`,
});

// Add a request interceptor
network.interceptors.request.use(
    (config) => {
        // get the current state
        const state = store.getState();

        // get the JWT token out of it
        const access_token = state?.session?.access_token;

        return {
            ...config,
            headers: { ...config.headers, Authorization: access_token },
        };
    },
    (error) => {
        return Promise.reject(error?.response?.data);
    }
);
