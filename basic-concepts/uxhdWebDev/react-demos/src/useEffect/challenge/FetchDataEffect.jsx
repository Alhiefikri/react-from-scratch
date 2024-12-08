import { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function FetchDataEffect() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      if (data && data.length) return setPosts(data);
    }

    FetchDataEffect();
  }, []);

  return (
    <div>
      <h1>Firtst Post Title: </h1>
      {posts.length > 0 ? <h2>{posts[0].title}</h2> : <p>loading...</p>}
    </div>
  );
};
export default FetchDataEffect;
