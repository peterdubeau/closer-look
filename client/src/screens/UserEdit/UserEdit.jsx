import React, { Component } from 'react'
import './UserEdit.css'
import { Redirect } from 'react-router-dom'
import Layout from '../../components/shared/Layout/Layout'
import { getUser, updateUser } from '../../services/users'

class UserEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                imgURL: '',
                email: '',
                password: '',
            },
            updated: false
        }
    }

    async componentDidMount() {
        let { id } = this.props.match.params
        const user = await getUser(id)
        this.setState({ user })
    }


    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            user: {
                ...this.state.user,
                [name]: value
            }
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        let { id } = this.props.match.params
        const updated = await updateUser(id, this.state.user)
        this.setState({ updated })
    }

    render() {

        const { user, updated } = this.state

        if (updated) {
            return <Redirect to={`/user/${this.props.match.params.id}`} />
        }
        
    
        return (
            <Layout>
                <div className="user-edit">
                    <div className="image-container">
                        <img className="edit-user-image" src={user.imgURL} alt={user.firstName}/>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                className="edit-Image"
                                placeholder='Image Link'
                                value={user.imgURL}
                                name='imgURL'
                                required
                                onChange={this.handleChange}
                            />
                        </form>
                    </div>
                    <form className="edit-form" onSubmit={this.handleSubmit}>
                        <input
                            className="edit-firstName"
                            placeholder='First Name'
                            value={user.firstName}
                            name='firstName'
                            required
                            autoFocus
                            onChange={this.handleChange}
                        />
                        <input
                            className="edit-lastName"
                            placeholder='Last Name'
                            value={user.lastName}
                            name='lastName'
                            required
                            onChange={this.handleChange}
                        />
                        <input
                            className="edit-email"
                            placeholder='E-mail Address'
                            value={user.email}
                            name='email'
                            required
                            onChange={this.handleChange}
                        />
                        <button type='submit' className="save-button">Save</button>
                    </form>
                </div>
            </Layout>
        )
    }
}

export default UserEdit