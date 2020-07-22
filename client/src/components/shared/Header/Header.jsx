import React from 'react'
import './Header.css'
import Hamburger from '../../../assets/images/HamburgerMenu.png'
import Search from '../../../assets/images/SearchIcon.png'
import User from '../../../assets/images/UserIcon.png'
import { Link, withRouter } from 'react-router-dom'


function Header(props) {

    let page = window.location.pathname
    let id = props.match.params.id

    if (page === `/api/users/${id}`) {
        return (
            <div className='header'>
                <img className='hamburger' src={Hamburger} />
                <Link className='home-link' to='/'>
                    <h1>CLOSER LOOK</h1>
                </Link>
                <div className='search-user'>
                    <img className='search' src={Search} />
                </div>
            </div>
        )
    } else {
        return (
            <div className='header'>
                <img className='hamburger' src={Hamburger} />
                <Link className='home-link' to='/'>
                    <h1>CLOSER LOOK</h1>
                </Link>
                <div className='search-user'>
                    <img className='search' src={Search} />
                    <Link to={`/user/${id}`}>
                        <img className='user' src={User} />
                    </Link>
                </div>
            </div>
        )
    }

}

export default withRouter(Header)