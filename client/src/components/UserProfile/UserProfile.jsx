import React from 'react'
import './UserProfile.css'

export default function UserProfile() {
    return (
        <div className='profile'>
            <form className='profile'>
                <img src='null' />
                <div className='up-full-name'>
                    <input type='text' name='firstName' placeholder='FIRST NAME' value={firstName} onChange={handleEventChange} />
                    <input type='text' name='lastName' placeholder='LAST NAME' value={lastName} onChange={handleEventChange} />
                </div>
                <input type='text' name='email' placeholder='EMAIL' value={email} onChange={handleEventChange} />
                <input type='password' name='password' placeholder='PASSWORD' value={password} onChange={handleEventChange} />
                <button className='update-user'>UPDATE</button>
                <button className='delete-user'>DELETE USER</button>
            </form>
        </div>
    )
}
