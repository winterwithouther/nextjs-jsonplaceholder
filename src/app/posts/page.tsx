import React from 'react';
import Link from 'next/link';
import { Post } from '@/lib/types'

async function getPosts(): Promise<Post[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
}

export default async function page() {
    const posts = await getPosts();

    return (<>
        <main className='p-4'>
            <h1 className='text-2xl font-bold mb-4'>All Blog Posts</h1>
            <ul className='space-y-3'>
                {posts.map(post => (
                    <li key={post.id} className='border p-3 rounded'>
                        <Link href={`/posts/${post.id}`}>
                            <h2 className='text-lg font-semibold hover:underline'>{post.title}</h2>
                        </Link>
                        <p>{post.body.slice(0, 100)}...</p>
                    </li>
                ))}
            </ul>
        </main>
    </>)
}
