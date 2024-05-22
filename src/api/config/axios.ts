import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const AUTH_TOKEN = ''

const instance = axios.create({
  baseURL: '',
  timeout: 10000
})

instance.defaults.headers.common['Authorization'] = AUTH_TOKEN
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

instance.interceptors.request.use(
  (
    config: InternalAxiosRequestConfig<any>
  ): InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>> => {
    return config
  },
  (error: AxiosError) => {
    console.error(error.status, error.message)

    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response: AxiosResponse<any, any>): AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> => {
    return response
  },
  (error: AxiosError) => {
    console.error(error.status, error.message)

    return Promise.reject(error)
  }
)

export default instance
