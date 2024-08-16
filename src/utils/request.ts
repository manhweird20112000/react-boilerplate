import type { AxiosRequestConfig } from 'axios'
import instance from '@/infra/config/axios'

interface IRequestParams {
  url: string,
  method?: 'GET' | 'POST' | 'PATCH' | 'PUT'| 'DELETE',
  data?: any,
  isNotify?: boolean,
  isPost?: boolean,
  isGet?: boolean,
  isUploadFile?: boolean,
  isDownloadFile?: boolean
}


export function request ({ url, method, data, isPost, isGet, isNotify, isUploadFile = false, isDownloadFile = false }: IRequestParams) {
  const options: AxiosRequestConfig & Record<string, any> = { isNotify, isUploadFile, isDownloadFile }
  if (isGet) {
    options.params = data
  }
  if (isPost) {
    options.data = data
  }

  return instance({
    url,
    method,
    ...options
  })
}
