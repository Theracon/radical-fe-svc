import { TextFieldPropsSizeOverrides } from '@mui/material'
import { IStyle } from '.'

export type CustomInputConfig = {
  label?: string
  placeholder?: string
  fullWidth?: boolean
  type?: 'text' | 'search' | 'checkbox'
  size?: OverridableStringUnion<'small' | 'medium', TextFieldPropsSizeOverrides> | undefined
  inputStyle?: IStyle
  containerStyle?: IStyle
  icon?: JSX.Element
  checkedIcon?: JSX.Element
  searchBtnAction?: (query: string) => void
}
