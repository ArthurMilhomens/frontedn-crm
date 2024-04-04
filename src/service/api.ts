import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const api = axios.create({
  // baseURL: "http://localhost:3333/",
  baseURL: "http://172.16.3.219:3333/",
});

const user = cookies.get("user");

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      window.location.href = "/";
    }
  }
);

user && (api.defaults.headers.common["Authorization"] = `${user.accessToken}`);
