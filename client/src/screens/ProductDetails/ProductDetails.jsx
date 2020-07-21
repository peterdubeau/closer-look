import React from 'react'
import './ProductDetails.css'
import Layout from '../../components/shared/Layout/Layout'
import ProductDetail from '../../components/ProductDetail/ProductDetail'
import BrandDetails from '../../components/BrandDetails/BrandDetails'

export default function ProductDetails() {
    return (
        <>
            <Layout>
                <div className="search-bar"></div>
                <div className='product-and-brand-container'>
                    <div className="product-details"><ProductDetail /></div>
                    {/* <div className="brand-details"><BrandDetails /></div> */}
                </div>
            </Layout>
        </>
    )
}
