import React from "react"
import usePosts from "../hooks/usePosts"

// All Posts
const Posts = () => {
  const posts = usePosts()

  return (
    <div>
      <p>posted:</p>
      {posts.map(post => (
        <Post
          key={post.id}
          title={post.title}
          url={post.url}
          desc={post.desc}
        />
      ))}
    </div>
  )
}

// Individual Post
const Post = ({ title, url, desc }) => (
  <article>
    <a href={url}>
      <h2>{title}</h2>
    </a>
    <p>{desc}</p>
  </article>
)

export default Posts
