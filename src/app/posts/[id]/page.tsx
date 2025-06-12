import { Post } from "@/lib/types";
import { notFound } from "next/navigation";
import { Comment } from "@/lib/types"
import Link from "next/link";
import CommentCard from "@/components/CommentCard";

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

async function getComments(postId: string): Promise<Comment[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = await params;
    const post = await getPost(id);

    if (!post) return notFound();

    const comments = await getComments(id);

    return (<>
        <main className="p-6 max-w-3xl mx-auto space-y-8">
            <article>
                <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
                <p className="text-gray-700 mb-4">{post.body}</p>
                <Link href={`/users/${post.userId}` }
                    className="text-blue-600 hover:underline"
                >
                    View Author
                </Link>
            </article>
            
            <section>
                <h2 className="text-xl font-semibold border-b pb-1">Comments</h2>
                {comments.length === 0 ? (
                    <p className="text-gray-500">No comments found.</p>
                ): (
                    <ul className="space-y-4 mt-4">
                        {comments.map((comment) => (
                            <CommentCard key={comment.id} comment={comment} />
                        ))}
                    </ul>
                )}
            </section>

            <Link href={`/posts`} className="inline-block mt-6 text-blue-600 hover:underline">
                ← Back to Posts
            </Link>
        </main>
    </>)
}