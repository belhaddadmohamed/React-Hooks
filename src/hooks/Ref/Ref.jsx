import { useEffect, useRef, useState } from "react"

export default function Ref() {
    // First use of useRef : DOM element reffering
    const lastSection = useRef()

    function goDown(){
        lastSection.current.scrollIntoView({
            behavior: "smooth", block: "start"
        })
    }

    // Second use of useRef as variable count the number of rendering
    const [render, setRender] = useState(0)
    const count = useRef(0)
    useEffect(()=>{
        count.current = count.current + 1
        console.log(count.current)
    }, [render])    



  return (
    <div>
        <button onClick={goDown}>Go Down</button>
        <button onClick={() => { setRender(prev=>prev+1) }}>Render</button>

        <section>
            <img src="https://picsum.photos/id/233/200/300" alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium recusandae repudiandae et perspiciatis labore perferendis ipsam sint expedita, minima voluptatum nulla delectus quas obcaecati laboriosam deserunt distinctio iure nihil voluptatem voluptas beatae qui voluptatibus assumenda! Distinctio dolore sit quisquam, at quas deserunt reprehenderit modi fugiat, quo tempora molestias animi.</p>
        </section>

        <section>
            <img src="https://picsum.photos/id/400/200/300" alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium recusandae repudiandae et perspiciatis labore perferendis ipsam sint expedita, minima voluptatum nulla delectus quas obcaecati laboriosam deserunt distinctio iure nihil voluptatem voluptas beatae qui voluptatibus assumenda! Distinctio dolore sit quisquam, at quas deserunt reprehenderit modi fugiat, quo tempora molestias animi.</p>
        </section>

        <section>
            <img src="https://picsum.photos/id/450/200/300" alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium recusandae repudiandae et perspiciatis labore perferendis ipsam sint expedita, minima voluptatum nulla delectus quas obcaecati laboriosam deserunt distinctio iure nihil voluptatem voluptas beatae qui voluptatibus assumenda! Distinctio dolore sit quisquam, at quas deserunt reprehenderit modi fugiat, quo tempora molestias animi.</p>
        </section>

        <section>
            <img src="https://picsum.photos/id/600/200/300" alt="" />
            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium recusandae repudiandae et perspiciatis labore perferendis ipsam sint expedita, minima voluptatum nulla delectus quas obcaecati laboriosam deserunt distinctio iure nihil voluptatem voluptas beatae qui voluptatibus assumenda! Distinctio dolore sit quisquam, at quas deserunt reprehenderit modi fugiat, quo tempora molestias animi.</p>
        </section>

        <section>
            <img src="https://picsum.photos/id/66/200/300" alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium recusandae repudiandae et perspiciatis labore perferendis ipsam sint expedita, minima voluptatum nulla delectus quas obcaecati laboriosam deserunt distinctio iure nihil voluptatem voluptas beatae qui voluptatibus assumenda! Distinctio dolore sit quisquam, at quas deserunt reprehenderit modi fugiat, quo tempora molestias animi.</p>
        </section>

        <section>
            <img src="https://picsum.photos/id/36/200/300" alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium recusandae repudiandae et perspiciatis labore perferendis ipsam sint expedita, minima voluptatum nulla delectus quas obcaecati laboriosam deserunt distinctio iure nihil voluptatem voluptas beatae qui voluptatibus assumenda! Distinctio dolore sit quisquam, at quas deserunt reprehenderit modi fugiat, quo tempora molestias animi.</p>
        </section>

        <section>
            <img src="https://picsum.photos/id/30/200/300" alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium recusandae repudiandae et perspiciatis labore perferendis ipsam sint expedita, minima voluptatum nulla delectus quas obcaecati laboriosam deserunt distinctio iure nihil voluptatem voluptas beatae qui voluptatibus assumenda! Distinctio dolore sit quisquam, at quas deserunt reprehenderit modi fugiat, quo tempora molestias animi.</p>
        </section>

        <section ref={lastSection}>
            <img src="https://picsum.photos/id/10/200/300" alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium recusandae repudiandae et perspiciatis labore perferendis ipsam sint expedita, minima voluptatum nulla delectus quas obcaecati laboriosam deserunt distinctio iure nihil voluptatem voluptas beatae qui voluptatibus assumenda! Distinctio dolore sit quisquam, at quas deserunt reprehenderit modi fugiat, quo tempora molestias animi.</p>
        </section>

        <section >
            <img src="https://picsum.photos/id/22/200/300" alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium recusandae repudiandae et perspiciatis labore perferendis ipsam sint expedita, minima voluptatum nulla delectus quas obcaecati laboriosam deserunt distinctio iure nihil voluptatem voluptas beatae qui voluptatibus assumenda! Distinctio dolore sit quisquam, at quas deserunt reprehenderit modi fugiat, quo tempora molestias animi.</p>
        </section>
        
    </div>
  )
}

