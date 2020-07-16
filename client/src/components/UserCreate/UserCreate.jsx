import React from 'react'

export default function UserCreate() {
    return (
        <div className='signup'>
            <img src='null' />
            <h4>CREATE AN ACCOUNT</h4>
            <div className='full-name'>
                <input type='text' name='first-name' placeholder='FIRST NAME' />
                <input type='text' name='last-name' placeholder='LAST NAME' />
            </div>
            <input type='text' name='email' placeholder='EMAIL' />
            <input type='password' name='password' placeholder='PASSWORD' />
            <button>SIGN UP</button>
        </div>
    )
}
