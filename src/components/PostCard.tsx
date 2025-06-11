import React from "react";
import { Post } from "@/lib/types"
import Link from "next/link";

interface PostCardProps {
    post: Post;
}

export default function PostCard({ post }: PostCardProps) {
    return (<>
        <Link href={`/posts/${post.id}`}>
            <li key={post.id} className="border p-3 rounded my-7">
                    <h2 className="text-lg font-semibold hover:underline">{post.title}</h2>
                <p>{post.body.slice(0, 100)}...</p>
            </li>
         </Link>
    </>)
}