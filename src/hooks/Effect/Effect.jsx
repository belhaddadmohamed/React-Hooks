import { useEffect } from "react"
import { useState } from "react"



export default function Effect() {
    const [users, setUsers] = useState([])
    const [filterUsers, setFilterUsers] = useState([])
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(data => setUsers(data))
    }, [])


    useEffect(() => {
        setFilterUsers(users)
    }, [users])


    useEffect(() => {
        const filter = users.filter(user => user.name.toLowerCase().includes(inputValue))   // lowerCase beh searchi b lowerCase
        setFilterUsers(filter)
    }, [inputValue])


    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

  return (
    <>
        <input type="text" className="search" onInput={handleChange}/>
        {filterUsers.map(
            user => (<h2 key={user.id}>{user.name}</h2>)
        )}
    </>
  )
}

