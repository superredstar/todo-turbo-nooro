import axios from "axios";
import { API_BACKEND_ENDPOINT } from "../config";

const api = axios.create({
  baseURL: API_BACKEND_ENDPOINT, // Replace with your API base URL
});

export default api;
