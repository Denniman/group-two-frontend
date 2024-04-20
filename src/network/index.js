import { network } from "../config";

export const login = async (payload) => {
  const { data } = await network.post("/auth/signin", payload);
  return data.payload;
};

export const register = async (payload) => {
  const { data } = await network.post("/auth/signup", payload);
  return data.payload;
};
