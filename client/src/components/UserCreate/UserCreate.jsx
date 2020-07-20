import React, { useState } from 'react'
import './UserCreate.css'
import { createUser } from '../../services/users'
import { Link } from 'react-router-dom'


export default function UserCreate() {

  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  const [userState, userSetState] = useState(initialState)

  const { firstName, lastName, email, password } = userState

  function handleEventChange(e) {
    userSetState({ ...userState, [e.target.name]: e.target.value })
  }

  let handleSubmit = async (e) => {
    e.preventDefault()
    const created = await createUser(userState)
  }
  return (
    <div className='signup'>
      <form className='signup'>
        <img src='null' />
        <header>
          <div className='line'></div>
          <h4 className='create-an-header'>CREATE AN ACCOUNT</h4>
          <div className='line'></div>
        </header>
        <div className='full-name'>
          <input type='text' name='firstName' placeholder='FIRST NAME' value={firstName} onChange={handleEventChange} />
          <input type='text' name='lastName' placeholder='LAST NAME' value={lastName} onChange={handleEventChange} />
        </div>
        <input type='text' name='email' placeholder='EMAIL' value={email} onChange={handleEventChange} />
        <input type='password' name='password' placeholder='PASSWORD' value={password} onChange={handleEventChange} />
        <Link to={`/api/users/`}> 
          <button className='signup-btn' onClick={handleSubmit}>SIGN UP</button>
        </Link>
      </form>
    </div>
  )
}