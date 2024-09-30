import { APP_URL } from "@/config/api.config";
import axios from "axios";

export const axiosApp = axios.create({
  baseURL: APP_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
