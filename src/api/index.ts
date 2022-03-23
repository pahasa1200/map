import axios from "axios";

export const API_URL = 'http://localhost:6200'

const instance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

instance.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers.Autharization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

instance.interceptors.request.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true })
            localStorage.setItem('access_token', response.data.token)
            return instance.request(originalRequest)
        } catch (e) {
            console.log('Not authorized!')
        }
    }
    throw error;
})

export default instance;
