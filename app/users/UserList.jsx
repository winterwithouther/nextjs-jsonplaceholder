import React from 'react'
import UserCard from './UserCard'

export default function UserList(props) {

    const { users } = props

    return (
        <div>
            {users.map((user) => {
                return <UserCard
                    key={user.id}
                    name={user.name}
                    email={user.email}
                />
            })}
        </div>
    )
}
