import React, {useState, useEffect} from 'react';
import ProductCards from '../../components/ProductCards/ProductCards';
import Layout from '../../components/shared/Layout/Layout'
import Search from '../../components/Search/Search'
import { getProducts } from '../../services/products'
 


export default function SearchResults() {

  const [productState, productSetState] = useState([])

  const displayProduct = async (e) => {
    const get = await getProducts()
    productSetState(get)
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