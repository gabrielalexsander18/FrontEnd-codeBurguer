import PropTypes from 'prop-types'
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

import { Header } from '../components/Header'

function ProtectedRoute({ element, isAdmin, ...rest }) {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Navigate to="/login" />
  }

  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate to="/" />
  }

  return (
    <>
      {!isAdmin && <Header />}
      <Outlet {...rest} element={element} />
    </>
  )
}

export default ProtectedRoute

ProtectedRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdmin: PropTypes.bool
}
