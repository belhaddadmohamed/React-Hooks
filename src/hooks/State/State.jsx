import { useState } from "react"


function State() {
    const [posts, setPosts] = useState()
    const [postId, setPostId] = useState(3)     // initial value 3

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))

    // posts? : means if the posts have data

    const addId = () => setPostId(prev => prev + 1)
    const subId = () => setPostId(prev => prev - 1)

  return (
    <div>
        { posts?.map( post => (
            <div>
                { post.id === postId ? ( <div> <h1>{post.id} : {post.title}</h1> <p>{post.body}</p> </div> ) : ("")  }
            </div>
        )) }

        <button onClick={addId}>Up</button>
        <button onClick={subId}>Down</button>
    </div>
  )
}

export default State





// export default function State() {
//     const [value, setValue] = useState(1)


//     const Up = () => setValue(prev => prev + 1)
//     const Down = () => setValue(prev => prev - 1)
    

//     return (
//         <>
//             <h1>{value}</h1>
//             <button onClick={Up} >Click Up</button>
//             <button onClick={Down} >Click Down</button>
//         </>
//     )
// }

