import { useState } from "react"
import data from "../data"


const JobContainer = () => {
    const [ posts,setPosts ] = useState(data)

    return (
        <>
        
            <h2>求人一覧</h2>
            <ul>

            {posts.map((p) => {
                return (
                <div key={p.id}>
                    <li>{p.id}</li>
                    <li>{p.title}</li>
                    <li>{p.category}</li>
                    <li>{p.income}</li>
                </div>
                )
            })}

            </ul>

        </>
    )
}

export default JobContainer