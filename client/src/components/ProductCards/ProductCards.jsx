import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './ProductCards.css';
import { getProducts } from '../../services/products'

export default function ProductCards(props) {

    const initialState = {
      imgURL: '',
      brandName: '',
      info: '',
      id:''
    }

  const [userState, userSetState] = useState(initialState)

  const { imgURL, brandName, info, id } = userState


  const displayProduct = async (e) => {
    const get = await getProducts()
    userSetState({
      ...userState,
      imgURL: get.imgURL,
      brandName: get.brandName,
      info: get.info,
      id: get._id
    })
    console.log(id)
  }
  useEffect(() => {
    displayProduct()
  }, [])

  function handleEventChange(e) {
    userSetState({ ...userState, [e.target.name]: e.target.value })
  }
// console.log(userState)
console.log(props.component)

  return (
    <div className="product-cards">
      {props.component.map(product =>
        <Link className="product" to={`/api/products/:${product._id}`}>
          <img className="product-image" src={product.imgURL} />
          <div className="product-brand">{product.brandName}</div>
          <div className="product-info">{product.info}</div>
        </Link>)}
        </div>
    )
  }


