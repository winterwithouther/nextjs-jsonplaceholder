import { Post } from "@/lib/types";
import { notFound } from "next/navigation";

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

export default async function Page({ params }: PostPageProps) {
    const id = params.id;
    const post = await getPost(params.id);

    if (!post) return notFound();

    console.log(post);

    return (<>
        <main className="p-4">
            <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
            <p>{post.body}</p>
        </main>
    </>)
}