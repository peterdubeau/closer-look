import React, { useState, useEffect } from 'react'
import './ProductDetail.css'
import { getProduct } from '../../services/products'
import { withRouter } from 'react-router-dom'
import Animal from '../../assets/images/Animal.png'
import People from '../../assets/images/People.png'
import Globe from '../../assets/images/Globe.png'

function ProductDetail(props) {

  const initialState = {
    brandName: '',
    info: '',
    imgURL: '',
    animals: '',
    people: '',
    planet: ''
  }

  const [productState, productSetState] = useState(initialState)

  const id = props.match.params.id


  const displayProduct = async () => {
    const get = await getProduct(id)
    productSetState({
      ...productState,
      brandName: get.brandName,
      info: get.info,
      imgURL: get.imgURL,
      animals: get.animals,
      people: get.people,
      planet: get.planet
    })
  }

  useEffect(() => {
    displayProduct()
  }, [])

  const { brandName, info, imgURL, people, planet, animals } = productState



  return (
    <div className='product-details'>
      <div className='name-info'>
        <p className='product-brand-name'>{brandName}</p>
        <p className='product-det-info'>{info}</p>
      </div>
      <img className='product-image' src={imgURL} />
      <hr className='details-hr' />
      <div className='impact-icons-det'>
        <img className={(animals === true ? 'true' : 'false')} src={Animal} />
        <img className={(people === true ? 'true' : 'false')} src={People} />
        <img className={(planet === true ? 'true' : 'false')} src={Globe} />
      </div>
    </div>
  )
}

export default withRouter(ProductDetail)