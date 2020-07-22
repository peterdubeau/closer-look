import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Search.css'
import img from '../../assets/images/SearchIcon.png'



const Search = () => {

  const [data, setData] = useState({
    products: [],
    type: "",
    search: "",
    results: [],
    searched: false,
  });
  
  const { products, type, search, results, searched } = data;

  const loadProducts = () => {
    getProducts().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setData({ ...data, products: data });
      }
    });
  };
  
  useEffect(() => {
    loadProducts();
  }, []);

  const searchData = () => {
    if (search) {
      list({ search: search || undefined, type: type }).then(
        response => {
          if (response.error) {
            console.log(response.error);
          } else {
            setData({ ...data, results: response, searched: true });
          }
        }
      );
    }
  };


  const searchSubmit = e => {
    e.preventDefault();
    searchData();

  };

  const handleChange = name => event => {
    setData({ ...data, [name]: event.target.value, searched: false });
  };
  
  const searchedProducts = (results = []) => {
    return (
      <div className='search-div'>
        <img onClick={callSearchFunction} type="submit" value="SEARCH" src={img} />
        <form className="search-form">
          <Link to={`/products/${searchState.searchText}`}><input
            className="search-input"
            value={searchValue}
            onChange={handleSearchInputChanges}
            name="Search"
            placeholder='SEARCH'
            type="text"
            autoFocus
          /></Link>
        </form>
      </div>
       
    )
  }
}

export default Search

