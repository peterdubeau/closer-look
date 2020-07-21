import React from 'react'
import './Search.css'

const Search = (props) => {


  // handleSearch = event => {
  //   const sort = () => this.handleSort(this.state.sortType)
  //   const queriedProducts = this.state.allProducts.filter(product => product.name.toLowerCase().includes(event.target.value.toLowerCase()))
  //   this.setState({ queriedProducts }, sort)
  // }

  // handleSubmit = event => event.preventDefault()





    return (
    <form className="search-form">
            <input
                className="search-input"
                value={props.value}
                name="Search"
                placeholder="SEARCH"
                type="text"
                autoFocus
        />
        </form>
    )
}

export default Search



