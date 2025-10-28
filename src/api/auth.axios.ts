import axios from "axios"

export const authAxiosInstance = axios.create({
    baseURL:import.meta.env.REACT_APP_API_URL,
    withCredentials:true
})