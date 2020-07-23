import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Search from '../../components/Search/Search'
import Layout from '../../components/shared/Layout/Layout'
import HangerIcon from "../../assets/images/HangerIcon.png"
import ShoeIcon from "../../assets/images/ShoeIcon.png"
import PurseIcon from "../../assets/images/PurseIcon.png"
import NewsCards from '../../assets/images/HomeCards.png'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <Link to="/products/search/tops"><img href="/api/products/search/tops" src={HangerIcon}></img></Link>
        <Link to="/products/search/sneakers"><img href="/api/products/search/sneakers" src={ShoeIcon}></img></Link>
        <Link to="/products/search/bags"><img href="/api/products/search/bags" src={PurseIcon}></img></Link>
      </div>
      <Search />
      <div className='news-cards'>
        <img id='news' src={NewsCards} />
      </div>
    </Layout>
  )
}

export default Home