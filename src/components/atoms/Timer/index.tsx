import { Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useTimer } from 'react-timer-hook'

import { setCooling, setLastRequestTimeStamp, setRequestCount } from '@/store/app/appSlice'

const TimerComponent = ({ expiryTime, showInfo }: { expiryTime?: Date; showInfo?: boolean }): JSX.Element => {
  const dispatch = useDispatch()

  if (!expiryTime) {
    const timeStamp = new Date()
    timeStamp.setSeconds(10)
    expiryTime = timeStamp
  }

  const handleOnEndCooling = () => {
    dispatch(setCooling(false))
    dispatch(setRequestCount(0))
    setLastRequestTimeStamp(undefined)
  }

  const { seconds } = useTimer({ expiryTimestamp: expiryTime, onExpire: handleOnEndCooling })

  return (
    <Typography mx={0} px={0} sx={{ backgroundColor: 'inherit', color: 'inherit' }}>
      {showInfo && <span>Wait...</span>}
      {seconds}
    </Typography>
  )
}

TimerComponent.displayName = 'TimerComponent'

export default TimerComponent
