import React from 'react'
import './ProductDetails.css'
import Layout from '../../components/shared/Layout/Layout'
import ProductDetails from '../../components/ProductDetails'
import BrandDetails from '../../components/BrandDetails'

export default function ProductDetails() {
    return (
        <>
            <Layout>
                <div className="search-bar"></div>
                <div className='product-and-brand-container'>
                    <div className="product-details"><ProductDetails /></div>
                    <div className="brand-details"><BrandDetails /></div>
                </div>
            </Layout>
        </>
    )
}
