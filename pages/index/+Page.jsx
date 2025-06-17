export default Page

import React from 'react'
import { useData } from '../../renderer/useData'

function Page() {
  const { posts } = useData()
  return (
    <>
      <h1>Losing Games</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`}>{post.title}</a> - {post.date}
          </li>
        ))}
      </ul>
    </>
  )
}
