import { AxiosInstance } from 'axios'
import UtilKeycloak from '@src/util/keycloak'

export const Interceptor = {
  apply: (instance: AxiosInstance) => {
    // 01.请求拦截器
    instance.interceptors.request.use((config) => {
      // todo.archie open
      // @ts-ignore
      // config.headers.Authorization = `Bearer ${UtilKeycloak.getToken()}`
      return config
    }, (error) => {
      return Promise.reject(error)
    })
    // 02.响应拦截器
    instance.interceptors.response.use((response) => {
      if (response.status === 401) {
        void UtilKeycloak.logout()
      } else if (response.status >= 400 && response.status < 500) {
        console.log('chile ==客户端错误=>')
      } else if (response.status >= 500) {
        console.log('chile ==服务器错误=>', response)
      }
      return response
    }, (error) => {
      return Promise.reject(error)
    })
  }
}

export default Interceptor
