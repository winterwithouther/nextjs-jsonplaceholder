import { Post } from "@/lib/types";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PostPageProps {
    params: {
        id: string;
    };
}

async function getPost(id: string): Promise<Post | null> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) return null;
    return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = await params;
    const post = await getPost(id);

    if (!post) return notFound();

    return (<>
        <main className="p-4 max-w-2xl mx-auto">
            <Link className="inline-block mb-4 text-blue-600 hover:underline" href="/posts">
                ← Back to Posts
            </Link>

            <article className="border p-5 rounded shadow">
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <p className="text-gray-700">{post.body}</p>
            </article>
        </main>
    </>)
}