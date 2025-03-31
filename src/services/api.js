import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080", // Configuração correta do Axios
    timeout: 5000,
});

export default api;
