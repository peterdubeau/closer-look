import React from 'react'
import './LoginSignUp.css'
import Login from '../../components/Login/Login'
import UserCreate from '../../components/UserCreate/UserCreate'

export default function LoginSignUp() {
    return (
        <>
            <Login />
            <div className='vertical-line'></div>
            <UserCreate />
        </>
    )
}
