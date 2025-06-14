// types.ts
export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
    };
    address: {
        city: string;
    }
}

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}