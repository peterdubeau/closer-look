import React from 'react'
import './Layout.css'
import Header from '../Header/Header'

export default function Layout(props) {
    return (
        <div className='layout'>
            <Header />
            <div className='layout-children'>
                {props.children}
            </div>
        </div>
    )
}
