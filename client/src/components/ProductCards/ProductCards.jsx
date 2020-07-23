import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './ProductCards.css';
import { getProducts } from '../../services/products'
import Animal from '../../assets/images/Animal.png'
import People from '../../assets/images/People.png'
import Globe from '../../assets/images/Globe.png'

export default function ProductCards(props) {

  const initialState = {
    imgURL: '',
    brandName: '',
    info: '',
    id: '',
    animals: '',
    people: '',
    planet: ''
  }

  const [userState, userSetState] = useState(initialState)

  const { imgURL, brandName, info, id, animals, people, planet } = userState


  const displayProduct = async (e) => {
    const get = await getProducts()
    userSetState({
      ...userState,
      imgURL: get.imgURL,
      brandName: get.brandName,
      info: get.info,
      id: get._id,
      animals: get.animals,
      people: get.people,
      planet: get.planet
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
              <div className='impact-icons'>
                <img className={(product.animals === true ? 'true' : 'false')} src={Animal} />
                <img className={(product.people === true ? 'true' : 'false')} src={People} />
                <img className={(product.planet === true ? 'true' : 'false') } src={Globe} />
              </div>
            </div>
          </div>
          <hr className='product-hr'/>
        </Link>)}
        
    </div>
  )
}


