import React, { Component } from 'react'
import './HomeHeader.css'
import Hamburger from '../../assets/images/HamburgerMenu.png'
import Search from '../../assets/images/SearchIcon.png'
import User from '../../assets/images/UserIcon.png'

export default class Header extends Component {
    render() {
        return (
            <div className='home-header'>
                <img className='hamburger' src={Hamburger} />
                <div>
                    <h1>CLOSER LOOK</h1>
                    <h3>find out more about the products you love.</h3>
                </div>
                <img className='search' src={Search} />
            </div>
        )
    }
}
