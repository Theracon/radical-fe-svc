'use client'

import { useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import { flex } from './utils/display'
import { Box, Typography } from '@mui/material'
import { RootState } from './store'
import UnprotectedRoutes from './routes/unprotected'
import ProtectedRoutes from './routes/protected'
import Logo from './assets/images/logo.svg'
import BackdropComponent from './components/molecules/Backdrop'
import './App.css'

const Fallback = ({ error }: { error: Error }): JSX.Element => {
  console.error(`An error occurred: ${error.message}`)
  return (
    <Box height='100vh' role='alert' sx={{ ...flex('column') }}>
      <img src={Logo} alt='Radical Logo' />
      <Typography variant='h6' pt={5}>
        Something went wrong:
      </Typography>
      <code style={{ color: 'red' }}>Please refresh the page</code>
    </Box>
  )
}
const logError = () => {
  console.error('<Application Error>: An unexpected error occurred.')
}

function App() {
  const { loading } = useSelector((state: RootState) => state.app)

  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onError={logError}
      onReset={(details) => {
        console.log(details)
      }}>
      <Router>
        <UnprotectedRoutes />
        <ProtectedRoutes />
      </Router>

      <BackdropComponent config={{ open: loading }} customProps={{ hasSpinner: true }} />
    </ErrorBoundary>
  )
}

export default App
