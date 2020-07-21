import React, { useState } from 'react'
import './ProductDetail.css'
import { getProduct } from '../../services/products'

export default function ProductDetail(props) {

  const initialState = {
    brandName: '',
    info: '',
    imgURL: ''
  }

  const [productState, productSetState] = useState(initialState)

  const { brandName, info, imgURL } = productState

  

    return (
            <div className='product-details'>
                <h3>TEST</h3>
                <h4><em>TEST</em></h4>
                <img src='null' />
                <div className="horizontal-line"></div>

            </div>
        )
}
