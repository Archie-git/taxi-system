import axios, { AxiosInstance, CreateAxiosDefaults, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import Interceptor from '@src/http/interceptor'
import AppStore, { mainActions } from '@src/store'

type HttpMethodWithParams = (path: string, params?: Object, config?: AxiosRequestConfig) => Promise<AxiosResponse>
type HttpMethodWithData = (path: string, data?: FormData | Object, config?: AxiosRequestConfig) => Promise<AxiosResponse>

class Http {
  private readonly instance: AxiosInstance

  constructor (initialConfig: CreateAxiosDefaults) {
    this.instance = axios.create(initialConfig)
    Interceptor.apply(this.instance)
  }

  request: (config: AxiosRequestConfig) => Promise<AxiosResponse> = (config) => {
    return this.instance.request(config).catch((error: AxiosError) => {
      if (error.response == null) {
        AppStore.dispatch(mainActions.openPrompt({
          status: 'error',
          message: `${error.code ?? ''} ${error.message}`
        }))
      }
      throw error
    })
  }

  get: HttpMethodWithParams = async (path, params, config) => {
    return await this.request({
      method: 'GET',
      url: path,
      params,
      ...config
    })
  }

  post: HttpMethodWithData = async (path, data, config) => {
    return await this.request({
      method: 'POST',
      url: path,
      data,
      ...config
    })
  }

  put: HttpMethodWithData = async (path, data, config) => {
    return await this.request({
      method: 'PUT',
      url: path,
      data,
      ...config
    })
  }

  delete: HttpMethodWithParams = async (path, params, config) => {
    return await this.request({
      method: 'DELETE',
      url: path,
      params,
      ...config
    })
  }
}

const http = new Http({
  baseURL: ENV.HOST_URL,
  timeout: 6000
})

export default http
