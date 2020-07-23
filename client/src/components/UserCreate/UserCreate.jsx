import React, { useState, useEffect } from 'react'
import './UserCreate.css'
import { createUser, getUserByEmail } from '../../services/users'
import { Link } from 'react-router-dom'
import UserImage from '../../assets/images/UserIcon.png'


export default function UserCreate() {

  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    id: ''
  }

  const [userState, userSetState] = useState(initialState)

  const { firstName, lastName, email, password, id } = userState

  function handleEventChange(e) {
    userSetState({ ...userState, [e.target.name]: e.target.value })
  }

  let handleSubmit = async (e) => {
    const created = await createUser(userState)
  }

  useEffect(() => {
    handleSubmit()
  })
  return (
    <div className='signup'>
      <form className='signup'>
        <img className='signup-img' src={UserImage} />
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
          <button className='signup-btn' onClick={handleSubmit}>SIGN UP</button>
      </form>
    </div>
  )
}