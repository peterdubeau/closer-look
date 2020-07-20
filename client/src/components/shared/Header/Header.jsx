import React, { Component } from 'react'
import './Header.css'
import Hamburger from '../../../assets/images/HamburgerMenu.png'
import Search from '../../../assets/images/SearchIcon.png'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img src={Hamburger}/>
                <h1>CLOSER LOOK</h1>
                <img src={Search}/>
            </div>
        )
    }
}
