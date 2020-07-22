import React, {useState, useEffect} from 'react';
import ProductCards from '../../components/ProductCards/ProductCards';
import Layout from '../../components/shared/Layout/Layout'
import Search from '../../components/Search/Search'
import { getProducts } from '../../services/products'
import { withRouter } from 'react-router-dom'
 


function SearchResults(props) {


  const [productState, productSetState] = useState([])
  let searchQuery = props.match.params.type
  console.log(searchQuery)
  
  const displayProduct = async (e) => {
    //get.filter type (props.match.params)
    //bird api react app
    //props.match.params
    
    const get = await getProducts()
    let things = get.filter(results => results.type === searchQuery)
    productSetState(things)
  }

  useEffect(() => {
    displayProduct()
  },[])



  return (

    
    <Layout>
      <Search />
      <ProductCards component={productState}/> 
    </Layout>


  )
}

export default withRouter(SearchResults) 