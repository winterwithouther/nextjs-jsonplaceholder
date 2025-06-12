import { Comment } from "@/lib/types"; 

interface CommentCardProps {
    comment: Comment;
}

export default function CommentCard({ comment }: CommentCardProps) {
    return (<>
        <li className="border rounded p-4 bg-gray-50">
            <p className="font-semibold text-sm">
                {comment.name} <span className="text-gray-500">({comment.email})</span>
            </p>
            <p className="text-gray-700 mt-1">{comment.body}</p>
        </li>
    </>)
}