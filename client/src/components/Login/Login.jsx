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
    // console.log(userState)
    // console.log(email)
    const get = await getUserByEmail(email)
    userSetState({ ...userState, id: get._id})
    console.log(userState)
  }



    return (
            <div className='login'>
                <img src='https://zpl.io/V4m6oQz' />
                <h4 className='login-header'>LOG IN TO YOUR ACCOUNT</h4>
        <input type='text' name='email' placeholder='EMAIL' value={email} onChange={handleEventChange}/>
                <input type='password' name='password' placeholder='PASSWORD' onChange={handleEventChange} />
                <Link to={`/api/users/${id}`}><button onClick={handleSubmit} className='login-btn'>LOG IN</button></Link>
            </div>
    )
}

export default withRouter(Login)