import React from 'react'

export default function PostCard({ title, body }) {

    return (<div className='bg-gray-200 border-3 border-gray-400 p-6 rounded-xl shadow-xl flex flex-col gap-3 hover:-translate-y-2 max-w-sm mx-auto transition ease duration-200 group hover:bg-black hover:border-xl'>
        <h2 className='group group-hover:text-gray-100 transition duration-200 ease text-xl font-bold'>{title}</h2>
        <p className='group group-hover:text-gray-100 transition duration-200 ease italic'>{body}</p>
    </div>)
}