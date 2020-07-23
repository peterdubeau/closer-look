import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Search.css'
import img from '../../assets/images/SearchIcon.png'
import { getProducts } from '../../services/products'




function Search(props) {

  const initialState = {
    products: [],
    queriedProducts: [],
    inputValue: '',
    type: ''
  }

  const [searchState, searchSetState] = useState(initialState)

  const { products, queriedProducts, inputValue } = searchState

  const handleChange = (e) => {
    searchSetState({ ...searchState, [e.target.name]: e.target.value })
    }
    
 

  const handleSubmit = () => {
    if (inputValue !== '') {
      return props.history.push(`/products/search/${inputValue.toLowerCase()}`)
    } else {
      return props.history.push(`/products/`)
    }
  }

  return (

     
      <div className='search-div'>
        <img type="submit" value="SEARCH" className='search-image' src={img} />
        <form onSubmit={handleSubmit}>
          <input
          className="search-input"
            value={inputValue}
            onChange={handleChange}
            name="inputValue"
            placeholder='SEARCH'
            type="text"
            autoFocus
      />
          </form>
       
      </div>
       
    )
  }




  export default withRouter(Search)