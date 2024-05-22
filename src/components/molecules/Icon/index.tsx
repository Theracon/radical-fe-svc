import { SvgIcon } from '@mui/material'

const IconComponent = ({ children }: { children: JSX.Element | string }): JSX.Element => {
  return <SvgIcon>{children}</SvgIcon>
}

IconComponent.displayName = 'IconComponent'

export default IconComponent
