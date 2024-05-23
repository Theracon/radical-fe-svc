import { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Box, Button, ButtonProps, Link, LinkProps } from '@mui/material'

import { CustomButtonConfig } from '@/types/button'
import { flex } from '@/utils/display'
import TimerComponent from '../Timer'
import { RootState } from '@/store'

const ButtonComponent = ({
  config,
  customProps = {},
  children,
  rateLimited
}: {
  config?: ButtonProps & LinkProps
  customProps?: CustomButtonConfig
  children: JSX.Element | string
  rateLimited?: boolean
}): JSX.Element => {
  const { cooling } = useSelector((state: RootState) => state.app)
  const [timeStamp, setTimeStamp] = useState<Date | undefined>(undefined)

  let buttonDisplay: JSX.Element | undefined

  switch (customProps.type) {
    case 'link':
      buttonDisplay = (
        <RouterLink to={customProps.linkTo!}>
          <Link
            component='button'
            {...config}
            onClick={rateLimited && cooling ? undefined : config?.onClick}
            className={customProps.customClasses}
            style={{ ...(customProps.customBtnStyle ?? {}) }}>
            {rateLimited && cooling ? <TimerComponent /> : children}
          </Link>
        </RouterLink>
      )
      break
    case 'button':
    default:
      buttonDisplay = (
        <Button
          disabled={cooling}
          {...config}
          className={customProps.customClasses}
          sx={{ ...flex() }}
          style={{ ...(customProps.customBtnStyle ?? {}) }}
          variant={customProps.variant}>
          {rateLimited && cooling ? <TimerComponent expiryTime={timeStamp} /> : children}
        </Button>
      )
      break
  }

  useEffect(() => {
    if (cooling) {
      const time = new Date()
      time.setSeconds(15)
      setTimeStamp(time)
    }
  }, [cooling])

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
