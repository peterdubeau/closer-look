import React from 'react'
// import './LoginSignUp.css'
import Login from '../../components/Login/Login'
import UserCreate from '../../components/UserCreate/UserCreate'
import Layout from '../../components/shared/Layout/Layout'

export default function LoginSignUp() {
    return (
        <>
            <Layout>
                <div className='login-signup'>
                    <Login />
                    <div className='vertical-line'></div>
                    <UserCreate />
                </div>
            </Layout>
        </>
    )
}
