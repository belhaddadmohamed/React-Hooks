import React, { useContext } from 'react'
import UserContext from './UserContext'

function Button() {
    const {setUsername} = useContext(UserContext)


  return (
    <button onClick={()=>setUsername("Raouf")}> Change USer </button>
  )
}

export default Button