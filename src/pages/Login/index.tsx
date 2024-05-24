import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Box, Grid, Typography } from '@mui/material'

import InputComponent from '@/components/atoms/Input'
import FormComponent from '@/components/molecules/Form'
import { flex } from '@/utils/display'
import ImageComponent from '@/components/atoms/Image'
import Logo from '@/assets/images/logo.svg'
import Layout from '@/containers/Layout'
import ButtonComponent from '@/components/atoms/Button'
import { useApi } from '@/hooks/useApi'
import { setLoading } from '@/store/app/appSlice'
import { RootState } from '@/store'
import SpinnerComponent from '@/components/atoms/Spinner'
import { setCurrentUser, setUserIsLoggedIn } from '@/store/user/userSlice'
import { AuthResponse } from '@/types/api'
import { routes } from '@/constants'

const Login = (): JSX.Element => {
  const { handleMakeHttpRequest } = useApi()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { loading } = useSelector((state: RootState) => state.app)

  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleSwitchModes = () => {
    setMode((current) => (current === 'login' ? 'register' : 'login'))
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    try {
      e.preventDefault()
      dispatch(setLoading(true))
      const reqData = { email, password }
      const response: AuthResponse = await handleMakeHttpRequest(mode, undefined, false, reqData)

      dispatch(setCurrentUser(response.user))
      dispatch(setUserIsLoggedIn(true))
      setError('')
      dispatch(setLoading(false))
      navigate(routes.dashboard)
    } catch (error) {
      setError('Invalid credentials')
      dispatch(setLoading(false))
    }
  }

  useEffect(() => {
    setMode('login')
    setEmail('')
    setPassword('')
    setError('')
  }, [])

  return (
    <Layout>
      <Box sx={{ width: { xs: '80%', md: '500px' }, ...flex('column') }}>
        <Box my={10}>
          <ImageComponent customProps={{ src: Logo }} />
        </Box>
        <Typography variant='h5' my={2} sx={{ fontWeight: 700 }}>
          Hello, there!
        </Typography>
        <Typography variant='subtitle1' py={3} sx={{ ...flex('row', 'flex-start') }}>
          {mode === 'login' ? 'Login into your account' : 'Create an account'}
        </Typography>
        <FormComponent>
          <Grid container spacing={2} sx={{ ...flex() }}>
            <Grid item xs={12}>
              <InputComponent
                config={{
                  placeholder: 'Enter your email',
                  value: email,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
                }}
                customProps={{}}
              />
            </Grid>
            <Grid item xs={12}>
              <InputComponent
                config={{
                  placeholder: 'Enter your password',
                  value: password,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
                }}
                customProps={{}}
              />
            </Grid>
            <Grid item xs={12}>
              {error && <Typography sx={{ color: 'red' }}>{error}</Typography>}
            </Grid>
            <Grid item xs={6} md={4}>
              <ButtonComponent
                config={{ disabled: loading || !email || !password, onClick: (e) => handleSubmit(e) }}
                customProps={{
                  customContainerStyle: {
                    ...flex('column', 'flex-start')
                  }
                }}>
                {loading ? <SpinnerComponent /> : mode === 'login' ? 'Login' : 'Register'}
              </ButtonComponent>
            </Grid>
          </Grid>
        </FormComponent>
        <Box my={2} sx={{ ...flex('column') }}>
          <Typography variant='subtitle1'>
            {mode === 'login' ? "Don't have an account?" : 'Already registered?'}
          </Typography>
          <ButtonComponent config={{ onClick: handleSwitchModes, disabled: loading }}>
            {loading ? <SpinnerComponent /> : mode === 'login' ? 'Register' : 'Login'}
          </ButtonComponent>
        </Box>
      </Box>
    </Layout>
  )
}

export default Login
