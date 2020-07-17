import React from 'react'
import './Login.css'

export default function Login() {
    return (
            <div className='login'>
                <img src='null' />
                <h4 className='login-header'>LOG IN TO YOUR ACCOUNT</h4>
                <input type='text' name='email' placeholder='EMAIL' />
                <input type='password' name='password' placeholder='PASSWORD' />
                <button className='login-btn'>LOG IN</button>
            </div>
    )
}
