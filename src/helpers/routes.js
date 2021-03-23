import React from 'react'
import Dashboard from 'routes/Dashboard'

export const routes = [{ path: '/dashboard', name: 'Dashboard', Component: <Dashboard /> }]

export const unauthenticatedRoutes = [
  { path: '/login', name: 'Login' },
  { path: '/signup', name: 'Sign Up' }
]
