import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './UserEdit.css'
import { updateUser, getUser } from '../../services/users'



function UserEdit(props) {

  const initialState = {
    imgURL: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  const [userState, userSetState] = useState(initialState)

  const { imgURL, firstName, lastName, email, password } = userState

  const displayUser = async (e) => {
    const get = await getUser(props.match.params.id)
    userSetState({
      ...userState,
      firstName: get.firstName,
      lastName: get.lastName,
      email: get.email,
      password: get.password
    })
    console.log(firstName)
  }
  useEffect(() => {
    displayUser()
  },[])
  
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

export default withRouter(UserEdit)