import { Routes, Route } from 'react-router-dom'

import { routes } from '@/constants'
import Login from '@/pages/Login'

const UnprotectedRoutes = () => {
  return (
    <Routes>
      <Route path={routes.login} element={<Login />} />
    </Routes>
  )
}

export default UnprotectedRoutes
