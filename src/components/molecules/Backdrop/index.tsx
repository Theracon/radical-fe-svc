import { Backdrop, BackdropProps, Box } from '@mui/material'

import { CustomBackdropConfig } from '@/types/backdrop'
import SpinnerComponent from '@/components/atoms/Spinner'

const BackdropComponent = ({
  config,
  customProps,
  children
}: {
  config: BackdropProps
  customProps?: CustomBackdropConfig
  children?: JSX.Element | JSX.Element[]
}): JSX.Element => {
  return (
    <Box>
      <Backdrop role='none' {...config} sx={{ color: customProps?.color ?? '#ffffff', zIndex: 1000 }}>
        {(customProps?.hasSpinner && <SpinnerComponent />) || children}
      </Backdrop>
    </Box>
  )
}

BackdropComponent.displayName = 'BackdropComponent'

export default BackdropComponent
