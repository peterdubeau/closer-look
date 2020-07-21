import React from 'react'
import './ProductDetails.css'

export default function ProductDetails() {
    return (
            <div className='product-details'>
                <h3>{brandName}</h3>
                <h4><em>{info}</em></h4>
                <img src='null' />
                <div className="horizontal-line"></div>
            </div>
        )
}
