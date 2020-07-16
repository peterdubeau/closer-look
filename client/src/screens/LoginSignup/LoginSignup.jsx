import React from 'react'
import './LoginSignup.css'
import Login from '../../components/Login'
import UserCreate from '../../components/UserCreate'

export default function LoginSignup() {
    return (
        <>
            <Login />
            <div className='vertical-line'></div>
            <UserCreate />
        </>
    )
}
