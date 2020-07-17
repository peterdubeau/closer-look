import React from 'react'
import './LoginSignUp.css'
import Login from '../../components/Login/Login'
import UserCreate from '../../components/UserCreate/UserCreate'
import Header from '../../components/shared/Header/Header'

export default function LoginSignUp() {
    return (
        <>
            <Header />
            <div className='login-signup'>
                <Login />
                <div className='vertical-line'></div>
                <UserCreate />
            </div>
        </>
    )
}
