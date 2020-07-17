import React, { useState } from 'react'
import { getUserByEmail } from '../../services/users'
import './Login.css'

export default function Login() {

  const initialState = {
    email: ''
  }
  
const [userState, userSetState] = useState(initialState)

const { email } = userState


  function handleEventChange(e) { 
    userSetState({ ...userState, [e.target.name]: e.target.value })
  }

  let handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(userState)
    // console.log(email)
    const get = await getUserByEmail(email)
    console.log(get)
  }



    return (
            <div className='login'>
                <img src='null' />
                <h4>LOG IN TO YOUR ACCOUNT</h4>
        <input type='text' name='email' placeholder='EMAIL' value={email} onChange={handleEventChange}/>
                <input type='password' name='password' placeholder='PASSWORD' onChange={handleEventChange} />
                <button onClick={handleSubmit} >LOG IN</button>
            </div>
    )
}
