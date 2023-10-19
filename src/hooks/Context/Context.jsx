import React, { useState } from 'react'
import User from './User'
import Card from './Card'
import UserContext from './UserContext'

// Declaration of a new context
// export const UserContext = createContext(null)


function Context() {
    const [username, setUsername] = useState("Belhaddad Mohamed")

    const userValues = {username, setUsername}

  return (
    <UserContext.Provider value={userValues}>
        <User/>
    </UserContext.Provider>
  )
}

export default Context