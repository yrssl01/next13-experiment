'use client'

import { Post } from "./shared/models/post"

export default function HomePage({ recentPosts }: {recentPosts: Post[]}) {
  return (
    <div>
        {recentPosts.map((post:Post) => (
            <div key={post.id}>{post.title}</div>
        ))}
    </div>
  )
}
