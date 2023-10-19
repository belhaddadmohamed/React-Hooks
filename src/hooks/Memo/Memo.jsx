import { useState, useMemo } from "react"

export default function Memo() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const updateOne = () => {setCountOne(prev => prev+1)}
    const updateTwo = () => setCountTwo(prev => prev+1)

    const isEvenOne = useMemo(() => {
        let i = 0
        while(i < 2000000000) i++       // Extensive caculation
        return countOne % 2 === 0 
    }, [countOne])

    
  return (
    <>
        <button onClick={updateOne} >{countOne}</button>
        {isEvenOne ? "Even" : "Odd"}
        <button onClick={updateTwo} >{countTwo}</button>
    </>
    
  )
}

