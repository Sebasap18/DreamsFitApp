import axios from "axios";

const AxiosConfig = axios.create({baseURL: "http://localhost/"});
AxiosConfig.interceptors.request.use((request) => {
    request.headers.pathView = location.pathname.substring(
        location.pathname.search("/view")
    );
    return request;
});
AxiosConfig.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        // Manejar errores de autorización (por ejemplo, redirigir al login)
        window.location = '/login';
    }
    return Promise.reject(error);
});

export default AxiosConfig;