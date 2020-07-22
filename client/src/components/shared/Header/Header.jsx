import React from 'react'
import './Header.css'
import Hamburger from '../../../assets/images/HamburgerMenu.png'
import Search from '../../../assets/images/SearchIcon.png'
import User from '../../../assets/images/UserIcon.png'
import { Link } from 'react-router-dom'


export default function Header() {

    let page = window.location.pathname

    if (page === '/api/users/') {
        return (
            <div className='header'>
                <img className='hamburger' src={Hamburger} />
                <Link className='home-link' to='/'>
                    <h1>CLOSER LOOK</h1>
                </Link>
                <img className='search' src={Search} />
            </div>
        )
    } else {
        return (
            <div className='header'>
                <img className='hamburger' src={Hamburger} />
                <Link className='home-link' to='/'>
                    <h1>CLOSER LOOK</h1>
                </Link>
                <img className='search' src={Search} />
                <Link to={`api/user/`}>
                    <img className='user' src={User} />
                </Link>
            </div>
        )
    }

}
