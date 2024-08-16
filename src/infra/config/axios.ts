import axios, { type AxiosError, type AxiosInstance, type AxiosResponse } from 'axios'
import { message } from 'antd'

let options: any
const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env['VITE_API_URL'] || ''
})

instance.interceptors.request.use(
  (config: any) => {
    options = config
    // const token = getStorage(ACCESS_TOKEN)
    const token = ''
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    if (config.isDownloadFile) {
      config.responseType = 'blob'
    }

    if (config.isUploadFile) {
      config.headers['Content-Type'] = 'multipart/form-data'
    }

    return config
  },
  (error: AxiosError) => {
    throw error
  }
)

instance.interceptors.response.use(
  async (response: AxiosResponse) => {
    if (response.data.status_code !== 200) {
      message.error(response.data.message || '')
    } else if (options['isNotify']) {
      message.success(response.data.message || '')
    }
    return response
  },
  (error: AxiosError) => {
    throw error
  }
)

export default instance
