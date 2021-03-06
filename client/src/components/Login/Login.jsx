import React, { useState, useEffect } from 'react'
import { getUserByEmail } from '../../services/users'
import './Login.css'
import { Link, withRouter } from 'react-router-dom'
import UserImage from '../../assets/images/UserIcon.png'
import { get } from 'mongoose'

function Login() {

  const initialState = {
    email: '',
    id: ''
  }

  const [userState, userSetState] = useState(initialState)

  const { email, id } = userState


  let handleEventChange = async (e) => {
    // const get = await getUserByEmail(email)
    userSetState({ ...userState, [e.target.name]: e.target.value})
  }

  let handleSubmit = async (e) => {
    const get = await getUserByEmail(email)
    userSetState({ ...userState, id: get._id })
  }

  useEffect(() => {
    handleSubmit()
  })


  return (
    <div className='login'>
      <img src={UserImage} className='login-img'/>
      <header className='log-header'>
        <div className='log-line'></div>
        <h4 className='login-header'>LOG IN TO YOUR ACCOUNT</h4>
        <div className='log-line'></div>
      </header>
      <input type='text' name='email' placeholder='EMAIL' value={email} onChange={handleEventChange}  />
      <input type='password' name='password' placeholder='PASSWORD' onChange={handleEventChange} />
      <Link to={`/users/${id}`}>
        <button onClick={handleSubmit} className='login-btn'>LOG IN</button>
      </Link>
    </div>
  )
}

export default withRouter(Login)