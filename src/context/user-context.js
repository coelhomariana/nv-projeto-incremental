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

  useEffect(() => {
    if (window.localStorage.getItem('username')) {
      setUser(user)
    }
  }, [])

  return <UserContext.Provider value={{ user }} {...props} />
}

export { UserProvider, useUser }
