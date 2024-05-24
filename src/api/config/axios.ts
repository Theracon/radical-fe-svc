import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

let token = JSON.stringify(localStorage.getItem('accessToken'))
token = token.replace(/"/g, '')
token = 'Bearer ' + token

const instance = axios.create({
  baseURL: '',
  timeout: 10000
})

instance.defaults.headers.common['Authorization'] = token
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
