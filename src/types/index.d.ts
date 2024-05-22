import { SxProps, Theme } from '@mui/material'

export interface IStyle extends SxProps<Theme> {
  [key: string]: string | number | IStyle
}
