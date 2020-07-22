import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './ProductCards.css';
import { getProducts } from '../../services/products'
import Animal from '../../assets/images/Animal.png'

export default function ProductCards(props) {

  const initialState = {
    imgURL: '',
    brandName: '',
    info: '',
    id: '',
    animals: ''
  }

  const [userState, userSetState] = useState(initialState)

  const { imgURL, brandName, info, id, animals } = userState


  const displayProduct = async (e) => {
    const get = await getProducts()
    userSetState({
      ...userState,
      imgURL: get.imgURL,
      brandName: get.brandName,
      info: get.info,
      id: get._id
    })
  }
  useEffect(() => {
    displayProduct()
  }, [])

  function handleEventChange(e) {
    userSetState({ ...userState, [e.target.name]: e.target.value })
  }

  

  return (
    <div className="product-cards">
      {props.component.map(product =>
        <Link to={`/api/products/${product._id}`}>
          <div className='product'>
            <img className="product-img" src={product.imgURL} />
            <div className ='brand-info'>
              <p className="product-brand">{product.brandName}</p>
              <p className="product-info">{product.info}</p>
              <img className={``} src={Animal}/>
            </div>
          </div>
          <hr className='product-hr'/>
        </Link>)}
        
    </div>
  )
}


