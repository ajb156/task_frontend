import axios from "axios";

// Axios peticion sin token
export const clienteAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

// Axios peticion con token
export const clienteAxiosToken = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

clienteAxiosToken.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token") || null;
    config.headers = {
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
