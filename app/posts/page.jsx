import React from 'react'
import PostList from './PostList'

export default async function page() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json()

    return (
        <div>
            <PostList posts={posts} />
        </div>
    )
}
