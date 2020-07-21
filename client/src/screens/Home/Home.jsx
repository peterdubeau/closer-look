import React from 'react'
import './Home.css'
import Search from '../../components/Search/Search'
import Layout from '../../components/shared/Layout/Layout'
import HangerIcon from "../../assets/images/HangerIcon.png"
import ShoeIcon from "../../assets/images/ShoeIcon.png"
import PurseIcon from "../../assets/images/PurseIcon.png"

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <img src={HangerIcon}></img>
        <img src={ShoeIcon}></img>
        <img src={PurseIcon}></img>
        <Search />
      </div>
    </Layout>
  )
}

export default Home