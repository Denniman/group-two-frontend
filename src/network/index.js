import { network } from "../config";
import { store } from "../providers/store";

export const login = async (payload) => {
  const { data } = await network.post("/auth/signin", payload);
  return data.payload;
};

export const register = async (payload) => {
  const { data } = await network.post("/auth/signup", payload);
  return data.payload;
};

export const createStore = async (payload) => {
  const token = store?.getState()?.session.accessToken;
  const { data } = await network.post("/merchant/create-store", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data.payload;
};

export const logOut = async (payload) => {
  const token = store?.getState()?.session.accessToken;

  const { data } = await network.post("/auth/logout", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data.payload;
};
