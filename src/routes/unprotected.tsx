import { Routes, Route } from 'react-router-dom'

import Login from '@/pages/Login'
import Register from '@/pages/Register'
import { routes } from '@/constants'

const UnprotectedRoutes = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Login />} />
      <Route path={routes.login} element={<Login />} />
      <Route path={routes.register} element={<Register />} />
    </Routes>
  )
}

export default UnprotectedRoutes
