import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import { routes } from 'helpers/routes'

const AuthenticatedApp = () => (
  <Switch>
    {routes.map(({ path, Component }) => (
      <Route path={path} key={path}>
        {Component}
      </Route>
    ))}
    <Redirect to={routes[0].path} />
  </Switch>
)

export default AuthenticatedApp
