import React from 'react'
// import './LoginSignUp.css'
import Layout from '../../components/shared/Layout/Layout'
import UserEdit from '../../components/UserEdit/UserEdit'

export default function User() {
    return (
        <>
            <Layout>
                <div className='login-signup'>
                   <UserEdit />
                </div>
            </Layout>
        </>
    )
}
