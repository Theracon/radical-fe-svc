import { IStyle } from '.'

interface IRouteParams {
  [key: string]: any
}

export type CustomButtonConfig = {
  customBtnStyle?: IStyle
  customContainerStyle?: IStyle
  variant?: 'text' | 'contained' | 'outlined'
  customClasses?: string
} & (
  | {
      type?: 'button'
    }
  | {
      type: 'link'
      linkTo: string
      params?: IRouteParams
    }
)
