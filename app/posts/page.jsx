import React from 'react';
import PostList from './PostList';

export default async function Page() {
  // Fetch data on the server side
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return (
    <div>
        <h1 className='text-center py-6 text-4xl mt-4 font-bold'>Posts</h1>
      <PostList posts={posts} />
    </div>
  );
}
