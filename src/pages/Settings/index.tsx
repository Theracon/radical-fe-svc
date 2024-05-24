import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Grid, Typography } from '@mui/material'

import Layout from '@/containers/Layout'
import { flex } from '@/utils/display'
import ButtonComponent from '@/components/atoms/Button'
import { routes, theme } from '@/constants'
import { setCurrentUser, setUserIsLoggedIn } from '@/store/user/userSlice'

const Settings = (): JSX.Element => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignOut = () => {
    dispatch(setCurrentUser(null))
    dispatch(setUserIsLoggedIn(false))
    localStorage.clear()
    navigate(routes.login)
  }

  return (
    <Layout hasSearchBar={false} searchBarValue='' setSearchBarValue={() => {}}>
      <Grid container spacing={2} width='100%' sx={{ ...flex('column') }}>
        <Grid item xs={12} width='100%' sx={{ ...flex() }}>
          <Typography variant='h6'>DO YOU WANT TO SIGN OUT?</Typography>
        </Grid>
        <Grid item xs={12}>
          <ButtonComponent
            config={{ onClick: handleSignOut }}
            customProps={{
              variant: 'contained',
              customBtnStyle: { backgroundColor: theme.colors.primary }
            }}>
            Sign Out
          </ButtonComponent>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Settings
