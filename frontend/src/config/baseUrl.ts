import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import {
  TOKEN_LOCAL_STORAGE,
  getLocalStorage,
} from "../helpers/frontend_helpers";

const API: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 15000,
  timeoutErrorMessage: "REQUEST TIMED OUT !!!",
});

API.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const token = getLocalStorage(TOKEN_LOCAL_STORAGE);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default API;
