import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import paths from '../constants/paths'
import { Home, Products, Register, Login, Cart, Admin } from '../containers'
import ProtectedRoute from './private-routes'

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={paths.Login} element={<Login />} />
        <Route path={paths.Cadastro} element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path={paths.Home} element={<Home />} />
          <Route path={paths.Products} element={<Products />} />
          <Route path={paths.Car} element={<Cart />} />
        </Route>

        <Route element={<ProtectedRoute isAdmin />}>
          <Route path={paths.Order} element={<Admin />} />
          <Route path={paths.ListProducts} element={<Admin />} />
          <Route path={paths.NewProducts} element={<Admin />} />
          <Route path={paths.EditProduct} element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes
