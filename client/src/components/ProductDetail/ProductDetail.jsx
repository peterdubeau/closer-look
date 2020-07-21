import React, { useState, useEffect } from 'react'
import './ProductDetail.css'
import { getProduct } from '../../services/products'
import { withRouter } from 'react-router-dom'

function ProductDetail(props) {

  const initialState = {
    brandName: '',
    info: '',
    imgURL: ''
  }

  const [productState, productSetState] = useState(initialState)

  const id = props.match.params.id


  const displayProduct = async () => {
    const get = await getProduct(id)
    productSetState({
      ...productState,
      brandName: get.brandName,
      info: get.info,
      imgURL: get.imgURL
    })
  }

  useEffect(() => {
    displayProduct()
  },[])

  const { brandName, info, imgURL } = productState

  

    return (
            <div className='product-details'>
                <h3>{brandName}</h3>
                <h4>{info}</h4>
                <img className='product-image' src={imgURL} />
                <div className="horizontal-line"></div>

            </div>
        )
}

export default withRouter(ProductDetail)