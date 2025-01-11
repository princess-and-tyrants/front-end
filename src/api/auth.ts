import { LoginProps } from "../pages/login/Login";
import { api } from "./https";

export const login = async (data: LoginProps) => {
  const response = await api.post<{ accessToken: string }>("/signin", {
    ...data,
  });
  return response;
};
