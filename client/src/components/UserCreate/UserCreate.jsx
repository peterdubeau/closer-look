import React, { useState } from 'react'
import './UserCreate.css'
import { createUser } from '../../services/users'


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
    console.log("hey you clicked a button!")  
  }
  return (
    <div className='signup'>
      <form className='signup'>
        <img src='null' />
        <h4>CREATE AN ACCOUNT</h4>
        <div className='full-name'>
          <input type='text' name='firstName' placeholder='FIRST NAME' value={firstName} onChange={handleEventChange} />
          <input type='text' name='lastName' placeholder='LAST NAME' value={lastName} onChange={handleEventChange} />
        </div>
        <input type='text' name='email' placeholder='EMAIL' value={email} onChange={handleEventChange} />
        <input type='password' name='password' placeholder='PASSWORD' value={password} onChange={handleEventChange} />
        <button onClick={handleSubmit}>SIGN UP</button>
      </form>
    </div>
  )
}


  // const [user, setUser] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: ''
  // })

  // let userInput = (e) => {
  //   setUser(e.target.value)
  // }

  // const [firstName, setFirstName] = useState('')
  // let firstNameInput = (e) => {
  //   setFirstName(e.target.value)
  // }

  // const [lastName, setLastName] = useState('')
  // let lastNameInput = (e) => {
  //   setLastName(e.target.value)
  // }

  // const [email, setEmail] = useState('')
  // let emailInput = (e) => {
  //   setEmail(e.target.value)
  // }

  // const [password, setPassword] = useState('')
  // let passwordInput = (e) => {
  //   setPassword(e.target.value)
  // }

