import React from 'react'

export default function Login() {
    return (
            <div className='login'>
                <img src='null' />
                <h4>LOG IN TO YOUR ACCOUNT</h4>
                <input type='text' name='email' placeholder='EMAIL' />
                <input type='password' name='password' placeholder='PASSWORD' />
                <button>LOG IN</button>
            </div>
    )
}
