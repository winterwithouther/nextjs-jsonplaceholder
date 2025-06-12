import NewPostForm from '@/components/NewPostForm';

export default function Page() {
    return (
        <main className='max-w-xl mx-auto p-6'>
            <h1 className='text-2xl font-bold mb-4'>Create a New Post</h1>
            <NewPostForm/>
        </main>
    )
}