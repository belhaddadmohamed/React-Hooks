import React from "react"



function Salary({salary}) {

    console.log("render salary component")


  return (
    <div>Salary: {salary}</div>
  )
}


export default React.memo(Salary)