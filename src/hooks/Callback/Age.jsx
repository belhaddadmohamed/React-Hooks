import React from "react"


function Age({age}) {

    console.log("render age component")

  return (
    <div>Age {age}</div>
  )
}

export default React.memo(Age)
