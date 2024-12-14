import React from 'react'

export default function UserCard(props) {
    const { name, email } = props
    return (<div className='bg-red-100 p-4'>
        <div>{name}</div>
        <div>{email}</div>
    </div>)
}
// 