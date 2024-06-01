import React, { useState, useEffect } from "react";

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data.slice(0, limit));
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const loadMorePosts = () => {
    setLimit(limit + 5);
    fetchPosts();
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={loadMorePosts}>Load More</button>
    </div>
  );
};

export default BlogPostList;
