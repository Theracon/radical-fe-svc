import { CircularProgress } from '@mui/material'

const SpinnerComponent = (): JSX.Element => {
  return <CircularProgress role='status' color='inherit' />
}

SpinnerComponent.displayName = 'SpinnerComponent'

export default SpinnerComponent
