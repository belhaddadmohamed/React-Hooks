import React, { useContext } from 'react'
import UserContext from './UserContext'
import Button from './Button'


function CurrentUser() {
    const {username} = useContext(UserContext)

  return (
    <>
        <h2> CurrentUser: {username} </h2>
        <Button />
    </>
  )
}

export default CurrentUser