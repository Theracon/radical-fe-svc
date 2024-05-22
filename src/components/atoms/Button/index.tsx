import { Box, Button, ButtonProps, Link, LinkProps } from '@mui/material'
import { CustomButtonConfig } from '@/types/button'
import { flex } from '@/utils/display'
import { Link as RouterLink } from 'react-router-dom'

const ButtonComponent = ({
  config,
  customProps = {},
  children
}: {
  config?: ButtonProps & LinkProps
  customProps?: CustomButtonConfig
  children: JSX.Element | string
}): JSX.Element => {
  let buttonDisplay: JSX.Element | undefined

  switch (customProps.type) {
    case 'link':
      buttonDisplay = (
        <RouterLink to={customProps.linkTo!}>
          <Link
            component='button'
            {...config}
            className={customProps.customClasses}
            style={{ ...(customProps.customBtnStyle ?? {}) }}>
            {children}
          </Link>
        </RouterLink>
      )
      break
    case 'button':
    default:
      buttonDisplay = (
        <Button
          {...config}
          className={customProps.customClasses}
          sx={{ ...flex() }}
          style={{ ...(customProps.customBtnStyle ?? {}) }}
          variant={customProps.variant}>
          {children}
        </Button>
      )
      break
  }

  return (
    <Box
      py={2.5}
      sx={{
        ...(customProps.customContainerStyle ?? {})
      }}>
      {buttonDisplay}
    </Box>
  )
}

ButtonComponent.displayName = 'ButtonComponent'

export default ButtonComponent
