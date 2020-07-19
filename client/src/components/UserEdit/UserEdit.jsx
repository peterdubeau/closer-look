import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './UserEdit.css'
import { updateUser } from '../../services/users'


export default function UserEdit() {

  const initialState = {
    imgURL: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  const [userState, userSetState] = useState(initialState)

  const { imgURL, firstName, lastName, email, password } = userState

  function handleEventChange(e) {
    userSetState({ ...userState, [e.target.name]: e.target.value })
  }

  let handleSubmit = async (e) => {
    e.preventDefault()
    const created = await updateUser(userState)
  }

  return (
    <div className='signup'>
      <form className='signup'>
        <img src={imgURL} />
        <div className='full-name'>
          <input type='text' name='firstName' placeholder={firstName} value={firstName} onChange={handleEventChange} />
          <input type='text' name='lastName' placeholder={lastName} value={lastName} onChange={handleEventChange} />
        </div>
        <input type='text' name='email' placeholder={email} value={email} onChange={handleEventChange} />
        <input type='password' name='password' placeholder={password} value={password} onChange={handleEventChange} />
        <Link to={`/userByEmail/${email}`}><button className='signup-btn' onClick={handleSubmit}>UPDATE</button></Link>
      </form>
    </div>
  )
}
