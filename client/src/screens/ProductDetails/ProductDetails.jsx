import React from 'react'
import './ProductDetails.css'
import Layout from '../../components/shared/Layout/Layout'

export default function ProductDetails() {
    return (
        <>
            <Layout>
                <div className="search-bar"></div>
                <div className='product-and-brand-container'>
                    <div className="product-details"><ProductDetails /></div>
                    <div className='vertical-line'></div>
                    {/* <div className="brand-details"><BrandDetails /></div> */}
                </div>
            </Layout>
        </>
    )
}
