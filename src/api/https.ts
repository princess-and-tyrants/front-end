import axios, { AxiosError, AxiosResponse } from "axios";
import { getAccessToken } from "../store/auth";

// application/json용
export const api = axios.create({
  baseURL: `http://${import.meta.env.VITE_API_URL}`,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

api.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (config: any) => {
    const token = getAccessToken();
    HeaderToken.set(token);

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const status = error.response?.status;

    // 엑세스 토큰 만료
    if (status === 401) {
      console.log("status", status);
    }

    return Promise.reject(error);
  }
);

export default class HeaderToken {
  public static set = (accessToken: string | null): void => {
    if (accessToken) {
      api.defaults.headers.common.Authorization = `${accessToken}`;
    } else {
      delete api.defaults.headers.common.Authorization;
    }
  };
}
