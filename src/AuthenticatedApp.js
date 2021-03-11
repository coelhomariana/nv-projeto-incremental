import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Dashboard from 'routes/Dashboard'

import { routes } from 'helpers/routes'

const AuthenticatedApp = () => (
  <Switch>
    <Route path={routes[0].path} component={Dashboard} />
    <Redirect to='/dashboard' />
  </Switch>
)

export default AuthenticatedApp
