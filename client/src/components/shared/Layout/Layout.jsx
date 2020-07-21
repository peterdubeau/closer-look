import React from 'react'
import { Link } from 'react-router-dom'
import './Layout.css'
import Header from '../Header/Header'
import HomeHeader from '../../HomeHeader/HomeHeader'

export default function Layout(props) {
    let page = window.location.pathname

    if ( page === '/' ) {
        return (
            <div className='layout'>
                <HomeHeader />
                <div className='layout-children'>
                    {props.children}
                </div>
            </div>
        )
    } else {
        return (
            <div className='layout'>
                <Link to='/'>
                    <Header />
                </Link>
                <div className='layout-children'>
                    {props.children}
                </div>
            </div>
        )
    }
}
