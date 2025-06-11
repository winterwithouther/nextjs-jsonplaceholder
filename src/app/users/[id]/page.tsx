import { notFound } from "next/navigation";
import { User } from "@/lib/types";

async function getUser(id: string): Promise<User | null> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) throw new Error("Error fetching user");
    return res.json();
}

export default async function Page({ params }: {params: { id: string } }) {
    const { id } = await params;
    const user = await getUser(id);
    if (!user) return notFound();

    return (<>
        <main className="p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
            <p className="text-gray-600 mb-4">@{user.username}</p>
            <div className="space-y-2 text-sm text-gray-800">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
                <p><strong>Company:</strong> {user.company.name}</p>
                <p><strong>City:</strong> {user.address.city}</p>
            </div>
        </main>
    </>)
}