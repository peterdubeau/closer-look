import React from 'react'
import './Search.css'
import img from '../../assets/images/SearchIcon.png'

const Search = (props) => {


  // handleSearch = event => {
  //   const sort = () => this.handleSort(this.state.sortType)
  //   const queriedProducts = this.state.allProducts.filter(product => product.name.toLowerCase().includes(event.target.value.toLowerCase()))
  //   this.setState({ queriedProducts }, sort)
  // }

  // handleSubmit = event => event.preventDefault()





  return (
    <div className='search-div'>
      <img className='search-image' src={img}/>
      <form className="search-form">
        <input
          className="search-input"
          value={props.value}
          name="Search"
          placeholder='SEARCH'
          type="text"
          autoFocus
        />
      </form>
    </div>
  )
}

export default Search



