import React, { useEffect, useState } from 'react'

function Example4() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, [])



    return (
        <>
            <div>Example4: API 호출</div>
            <ul>
                {
                    posts.map((posts) => (<li key={posts.id}>{posts.title}</li>))
                }
            </ul>
        </>
    )
}

export default Example4;