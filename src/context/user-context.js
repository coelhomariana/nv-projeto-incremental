import React, { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext()

const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }

  return context
}

const UserProvider = props => {
  const [user, setUser] = useState({})

  const logout = () => {
    localStorage.removeItem('user')
    window.location.reload()
  }

  useEffect(() => {
    const localStorageUser = window.localStorage.getItem('user')

    if (localStorageUser) {
      setUser(JSON.parse(localStorageUser))
    }
  }, [])

  return <UserContext.Provider value={{ user, logout }} {...props} />
}

export { UserProvider, useUser }
