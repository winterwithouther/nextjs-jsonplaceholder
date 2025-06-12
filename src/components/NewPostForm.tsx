'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPostForm() {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title || !body) {
            alert('Please fill in both fields');
            return;
        }

        console.log("New post:", {title, body});

        router.push("/posts");
    }

    return (<>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="title">
                    Title
                </label>
                <input
                    id="title"
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter title"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1"  htmlFor="body">
                    Body
                </label>
                <textarea
                    id="body"
                    className="w-full border rounded px-3 py-2"
                    rows={5}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Write your post here..."
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Submit
            </button>
        </form>
    </>)
}