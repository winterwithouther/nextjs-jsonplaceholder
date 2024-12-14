import React from 'react'
import UserList from './UserList'


export default async function page() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()

    return (<div>
        <h1 className='text-center py-6 text-4xl mt-4 font-bold'>Users</h1>
        <UserList users={users}/>
    </div>)
}
