import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from 'routes/Login'
import SignUp from 'routes/SignUp'

const UnauthenticatedApp = () => (
  <Switch>
    <Route path='/login' component={Login} />
    <Route path='/signup' component={SignUp} />
    <Redirect to='/login' />
  </Switch>
)

export default UnauthenticatedApp
