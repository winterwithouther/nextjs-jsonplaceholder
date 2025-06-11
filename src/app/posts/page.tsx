import React from 'react';
import { Post } from '@/lib/types'
import PostCard from '@/components/PostCard';
import Link from 'next/link';

interface PostsPageProps {
    searchParams: { page?: string }
}

async function getPosts(start: number, limit: number): Promise<Post[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`)
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
}

export default async function Page({ searchParams }: PostsPageProps) {
    const { page } = await searchParams;
    const currentPage = Number(page || 2);
    const postsPerPage = 10;
    const start = (currentPage - 1) * postsPerPage;

    const posts = await getPosts(start, postsPerPage);

    return (<>
        <main className='p-4 max-w-2xl mx-auto'>
            <h1 className='text-2xl font-bold mb-4'>Posts - page {currentPage}</h1>
            <ul className='space-y-3'>
                {posts.map(post => (
                    <PostCard key={post.id} post={post}/>
                ))}
            </ul>


            {/* Pagination Control */}
            <div className='mt-8 flex justify-between'>
                {currentPage > 1 ? (
                    <Link href={`/posts?page=${currentPage - 1}`} className='text-blue-600 hover:underline'>
                        ← Previous
                    </Link>
                ) : <div/>}

                {posts.length === postsPerPage && (
                    <Link href={`/posts?page=${currentPage + 1}`} className='text-blue-600 hover:underline ml-auto'>
                        Next →
                    </Link>
                )}
            </div>
        </main>
    </>)
}
