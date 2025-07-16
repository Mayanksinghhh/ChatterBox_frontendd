import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chatterbox-backend-wqxi.onrender.com/api" : "/api",
  withCredentials: true,
});
