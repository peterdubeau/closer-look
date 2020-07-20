import React, { useState } from 'react'
import { getUserByEmail } from '../../services/users'
import './Login.css'
import { Link, withRouter } from 'react-router-dom'

function Login() {

  const initialState = {
    email: '',
    id: ''
  }

  const [userState, userSetState] = useState(initialState)

  const { email, id } = userState


  function handleEventChange(e) {
    userSetState({ ...userState, [e.target.name]: e.target.value })
  }

  let handleSubmit = async (e) => {
    e.preventDefault()
    const get = await getUserByEmail(email)
    userSetState({ ...userState, id: get._id })
    console.log(userState)
  }



  return (
    <div className='login'>
      <img src='https://zpl.io/V4m6oQz' />
      <header className='log-header'>
        <div className='log-line'></div>
        <h4 className='login-header'>LOG IN TO YOUR ACCOUNT</h4>
        <div className='log-line'></div>
      </header>
      <input type='text' name='email' placeholder='EMAIL' value={email} onChange={handleEventChange} />
      <input type='password' name='password' placeholder='PASSWORD' onChange={handleEventChange} />
      <Link to={`/api/users/${id}`}>
        <button onClick={handleSubmit} className='login-btn'>LOG IN</button>
      </Link>
    </div>
  )
}

export default withRouter(Login)