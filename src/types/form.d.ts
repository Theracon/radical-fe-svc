import { IStyle } from '.'

type HTTPRequestConfig = {
  data?: { [key: string]: any }
}

export type CustomFormConfig = {
  httpRequestConfig: HTTPRequestConfig
  containerStyle?: IStyle
}
