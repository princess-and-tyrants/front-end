import { JoinReq } from "../pages/join/Join";
import { LoginProps } from "../pages/login/Login";
import { api } from "./https";

export const login = async (data: LoginProps) => {
  const response = await api.post<{ accessToken: string }>("/signin", {
    ...data,
  });
  return response;
};
export const join = async (data: JoinReq) => {
  const response = await api.post(`/signup`, { ...data });
  return response;
};

export const checkId = async (id: string) => {
  const response = await api.post(`/check/id?id=${id}`);
  return response;
};
