import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
	baseURL: BASE_URL,
	timeout: 45000,
});

export const get = (route, config) => api.get(`${route}`, config);

export default api;
