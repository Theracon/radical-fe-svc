import { Routes, Route } from 'react-router-dom'

import { routes } from '@/constants'
// import Login from '@/pages/Login'
// import Register from '@/pages/Register'
import Dashboard from '@/pages/Dashboard'

const UnprotectedRoutes = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Dashboard />} />
      {/* <Route path={routes.login} element={<Login />} />
      <Route path={routes.register} element={<Register />} /> */}
    </Routes>
  )
}

export default UnprotectedRoutes
