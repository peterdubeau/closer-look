import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './ProductCards.css';
import { getProducts } from '../../services/products'

export default function ProductCards() {

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
    console.log(get)
  }
  useEffect(() => {
    displayProduct()
  }, [])

  function handleEventChange(e) {
    userSetState({ ...userState, [e.target.name]: e.target.value })
  }
console.log(userState)


  return (

    <div className="product-cards">
        <Link className="product" to={`/api/products/:${id}`}>
                <img className="product-image" src={imgURL} />
                <div className="product-brand">{brandName}</div>
                <div className="product-info">{info}</div>
            </Link>
        </div>
    )
  }


