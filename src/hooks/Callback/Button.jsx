import React from "react"


function Button({text, fun}) {

    console.log("render " + text +"  Button")

  return (
    <button onClick={fun}>{text}</button>
  )
}

export default React.memo(Button)