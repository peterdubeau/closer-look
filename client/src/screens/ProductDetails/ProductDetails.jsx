import React from 'react'
import './ProductDetails.css'
import Layout from '../../components/shared/Layout/Layout'
import ProductDetail from '../../components/ProductDetail/ProductDetail'
import BrandDetails from '../../components/BrandDetails/BrandDetails'
import Search from '../../components/Search/Search'

export default function ProductDetails() {
    return (
        <>
            <Layout>
                <Search />
                <div className='product-and-brand-container'>
                    <div className="product-details"><ProductDetail /></div>
                    <div className="brand-details"><BrandDetails /></div>
                </div>
            </Layout>
        </>
    )
}
