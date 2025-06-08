import React from 'react'
import { Post } from '@/types'

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json()
}
 
export default async function Home() {
  const posts = await getPosts();

  console.log("yes")

  return (<>
    <main className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Blog Posts</h1>
      <ul className='space-y-3'>
        {posts.map(post => (
          <li key={post.id} className="border p-3 rounded">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  </>);
}
