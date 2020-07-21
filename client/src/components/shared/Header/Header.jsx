import React, { Component } from 'react'
import './Header.css'
import Hamburger from '../../../assets/images/HamburgerMenu.png'
import Search from '../../../assets/images/SearchIcon.png'
import User from '../../../assets/images/UserIcon.png'
import { Link } from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img className='hamburger' src={Hamburger} />
                <Link className='home-link' to='/'>
                    <h1>CLOSER LOOK</h1>
                </Link>
                <img className='search' src={Search} />
                <Link to= {`api/user/`}>
                    <img className='user' src={User} />
                </Link>
            </div>
        )
    }
}
