import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import Dashboard from '@/pages/Dashboard'
import Favourites from '@/pages/Favourites'
import Settings from '@/pages/Settings'
import { routes } from '@/constants'

const ProtectedRoutes = () => {
  const location = useLocation()
  const user = {
    isLoggedIn: true
  }

  if (!user.isLoggedIn) {
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
