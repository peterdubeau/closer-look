import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './UserEdit.css'
import { updateUser, getUser, deleteUser } from '../../services/users'
import Layout from '../shared/Layout/Layout'



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

  const id = props.match.params.id

  const displayUser = async (e) => {
    const get = await getUser(id)
    userSetState({
      ...userState,
      firstName: get.firstName,
      lastName: get.lastName,
      email: get.email,
      password: get.password,
      id: get.id
    })
    console.log(firstName)
  }
  useEffect(() => {
    displayUser()
  }, [])

  function handleEventChange(e) {
    userSetState({ ...userState, [e.target.name]: e.target.value })
  }

  let handleSubmit = async (e) => {
    e.preventDefault()
    const created = await updateUser(id, userState)
    console.log(created)
  }

  let handleDelete = async () => {
    const deleted = await deleteUser(id)
  }

  return (
    <Layout>
      <div className='user'>
        <form className='user'>
          <img src={imgURL} />
          <div className='full-name'>
            <input type='text' name='firstName' placeholder={firstName} value={firstName} onChange={handleEventChange} className='firstname' />
            <input type='text' name='lastName' placeholder={lastName} value={lastName} onChange={handleEventChange} className='lastname' />
          </div>
          <input type='text' name='email' placeholder={email} value={email} onChange={handleEventChange} />
          <input type='password' name='password' placeholder={password} value={password} onChange={handleEventChange} />
          <Link to={`/users/${id}`}>
            <button className='update-btn' onClick={handleSubmit}>UPDATE</button>
          </Link>
          <Link to='/'>
            <button className='delete-btn' onClick={handleDelete}>DELETE USER</button>
          </Link>
        </form>
      </div>
    </Layout>
  )
}

export default withRouter(UserEdit)