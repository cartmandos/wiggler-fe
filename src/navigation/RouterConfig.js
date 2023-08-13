import React from 'react'
import {Routes, Route} from 'react-router-dom'
import PrivateRoute from './Auth/PrivateRoute'
import {ROOT, LOGIN, DASHBOARD, SIGNUP} from 'navigation/CONSTANTS'
import Home from 'pages/Home'
import SignIn from 'pages/Login'
import SignUp from 'pages/SignUp'
import {NotFound} from './NotFound'

/* import Dashboard from 'pages/Dashboard';
import { Page1 } from 'pages/Page1';
import Login from './Auth/Login';
import { AuthorizedPage1 } from 'pages/AuthorizedPage1';
import PrivateRoute from './Auth/PrivateRoute'; */

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path={ROOT} element={<Home />} />
      <Route path={LOGIN} element={<SignIn />} />
      <Route path={SIGNUP} element={<SignUp />} />

      <Route path={DASHBOARD} element={<PrivateRoute element={<Home />} />} />

      {/* <PrivateRoute path={DASHBOARD}>
          <Dashboard />
        </PrivateRoute> */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
