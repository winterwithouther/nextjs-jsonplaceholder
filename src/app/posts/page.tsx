import React from 'react';
import { Post } from '@/lib/types'
import PostCard from '@/components/PostCard';

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
                    <PostCard key={post.id} post={post}/>
                ))}
            </ul>
        </main>
    </>)
}
