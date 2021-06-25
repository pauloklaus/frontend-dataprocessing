import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

const axiosConfig = {
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 60 * 1000,
};

const connection = axios.create(axiosConfig);

export { connection };
