import axios from 'axios'
import { getToken } from './auth'
// create an axios instance
const service = axios.create({
  // withCredentials: true,
  // crossDomain: true,
  baseURL: process.env.BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 100000, // request timeout
})
// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent

    // let each request carry token
    // ['X-Token'] is a custom headers key
    // please modify it according to the actual situation

    config.headers.Authorization = getToken()

    if (typeof config.headers['Content-Type'] === 'undefined') {
      config.headers['Content-Type'] = 'application/json'
    }

    // handle data post before send request
    return config
  },
  (error) => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data

    return res
  },
  (error) => {
    if (process.client) {
      if (error.response?.data?.type === 'TOKEN_EXPIRED') {
        localStorage.removeItem('user')
        location.reload()
      }
    }
    return Promise.reject(error)
  }
)

export default service
