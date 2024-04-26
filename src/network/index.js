import { network } from "../config";

export const login = async (payload) => {
  const { data } = await network.post("/auth/signin", payload);
  return data.payload;
};

export const register = async (payload) => {
  const { data } = await network.post("/auth/signup", payload);
  return data.payload;
};

export const createStore = async (payload) => {
  const { data } = await network.post("/merchant/create-store", payload);
  return data.payload;
};

export const logOut = async (payload) => {
  const { data } = await network.post("/auth/logout", payload);
  return data.payload;
};

export const products = async (payload) => {
  const { data } = await network.post("/merchant/create-product", payload);
  return data.payload;
};

export const getMerchantStore = async () => {
  const { data } = await network.get("/merchant/get-store");
  return data.payload;
};

export const getAllProducts = async () => {
  const { data } = await network.get("/merchant/get-products");
  return data.payload;
};
