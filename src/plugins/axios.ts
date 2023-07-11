import axios from 'axios'
import type {AxiosInstance} from 'axios'

const api: AxiosInstance = axios.create({ baseURL: `${window.location.protocol}//${window.location.hostname}:${window.location.port}/api/data/` })
api.interceptors.response.use(undefined, async (error) => {
    if (error?.response?.status === 401) {
        console.log('error de sesión.')
    }
    return Promise.reject(error)
})

export { api }
