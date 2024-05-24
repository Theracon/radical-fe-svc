import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import Dashboard from '@/pages/Dashboard'
import Favourites from '@/pages/Favourites'
import Settings from '@/pages/Settings'
import { routes } from '@/constants'
import { tokenExpired } from '@/utils/date'

const ProtectedRoutes = () => {
  const location = useLocation()
  const accessToken = localStorage.getItem('accessToken')

  if (!accessToken) {
    return <Navigate to={routes.login} state={{ from: location }} replace />
  }

  if (tokenExpired(accessToken)) {
    return <Navigate to={routes.login} state={{ from: location }} replace />
  }

  return (
    <Routes>
      <Route path={routes.dashboard} element={<Dashboard />} />
      <Route path={routes.favourites} element={<Favourites />} />
      <Route path={routes.settings} element={<Settings />} />
    </Routes>
  )
}

export default ProtectedRoutes
