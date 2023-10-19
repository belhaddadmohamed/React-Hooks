import React from 'react'
import User from './User'

function Card({children}) {
  return (
    <div className="card" style={{"color":"aqua"}}>
        {children}
    </div>
  )
}

export default Card