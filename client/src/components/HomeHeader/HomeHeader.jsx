import React, { Component } from 'react'
import './HomeHeader.css'
import Hamburger from '../../assets/images/HamburgerMenu.png'
import Search from '../../assets/images/SearchIcon.png'
import User from '../../assets/images/UserIcon.png'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className='home-header'>
                <img className='home-hamburger' src={Hamburger} />
                <div className='closer-look'>
                    <h1>CLOSER LOOK</h1>
                    <h3>find out more about the products you love.</h3>
                </div>
                <div className='search-user'>
                    <img className='home-search' src={Search} />
                    <Link to={`/login`}>
                        <img className='home-user' src={User} />
                    </Link>
                </div>
            </div>
        )
    }
}
