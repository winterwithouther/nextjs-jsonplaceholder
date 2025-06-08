import Link from 'next/link';

export default function Home() {
  return (
    <main className='p-4'>
      <h1 className='text-3xl font-bold mb-4'>Welcome to the Blog</h1>
      <p className='mb-4'>This is a simple blog built with Next.js and Typescript</p>
      <Link href="/posts" className='text-blue-500 underline'>
        View all posts →
      </Link>
    </main>
  );
}