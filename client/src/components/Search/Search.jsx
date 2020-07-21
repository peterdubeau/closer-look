import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Search.css'
import img from '../../assets/images/SearchIcon.png'
import { getProducts } from '../../services/products'


const Search = (props) => {

  const initialState = {
    product: [],
    searchText: '',
    productType: '',
}

  const [searchState, setSearchState] = useState(initialState)

  const { type } = searchState

  const handleChange = (e) => {
    setSearchState({
      searchText: e.target.value
    })
  }

  const handleSearch = async (e) => {
    const get = await getProducts()
    setSearchState({
      ...searchState,
      productType: get.type
    })
  }
  useEffect(() => {
    handleSearch()
    console.log(searchState)
  }, [])



  return (
    <div className='search-div'>
     <img onClick={handleSearch} className='search-image' src={img}/>
     <form className="search-form">
     <Link to={`/products/${searchState.searchText}`}><input
          className="search-input"
          value={props.value}
          onChange={handleSearch}
          name="Search"
          placeholder='SEARCH'
          type="text"
          autoFocus
        /></Link>
      </form>
    </div>
       
  )
}

export default Search



