import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Dashboard from 'routes/Dashboard'

const AuthenticatedApp = () => (
  <Switch>
    <Route path='/dashboard' component={Dashboard} />
    <Redirect to='/dashboard' />
  </Switch>
)

export default AuthenticatedApp
