import React, { useEffect, useState } from "react";

const ExUseEffect04 = () => {
  const [posts, setPosts] = useState([]);

    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json()) // 수정된 부분
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <h3>useEffect Fetch</h3>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default ExUseEffect04;
