import React from 'react'
import PostCard from './PostCard'

export default function PostList({ posts }) {

    return (<div className="container sm:flex sm:justify-center sm:h-full sm:w-full
    sm:flex-col sm:mx-auto">
        <h1 className='text-center py-6 text-4xl mt-4 font-bold'>Posts</h1>
        <div className='py-5 flex flex-col flex-wrap w-full h-full
        gap-6 px-3 sm:flex sm:flex-row sm:flex-wrap sm:justify-evenly'>
            {posts.map((post) => (
                <PostCard key={post.id} title={post.title} body={post.body} />
            ))}
        </div>
    
    </div>)
}   
