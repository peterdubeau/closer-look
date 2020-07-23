import React from 'react'
import './BrandDetails.css'
import People from '../../assets/images/People.png'
import Animal from '../../assets/images/Animal.png'
import Globe from '../../assets/images/Globe.png'


export default function BrandDetails() {
  return (
    <div className="cause-card">
      <div className="cause-icon-container">
        <img className="cause-icon" id='people' src={People} />
        <img className="cause-icon" id='planet' src={Globe} />
        <img className="cause-icon" it='animal' src={Animal} />
      </div>
      <div className="cause-details">
        <h3>CLIMATE</h3>
        <p>This product contributes to climate change in the production and use of pretroleum products.</p>
      </div>
      <div className="cause-details">
        <h3>SUSTAINABILITY</h3>
        <p>This product uses a minor amount of non-recyclable materials.</p>
      </div>
      <div className="cause-details">
        <h3>ANIMAL CRUELTY</h3>
        <p>This product is animal cruelty free</p>
      </div>
      <div className="cause-details">
        <h3>HABITAT DESTRUCTION</h3>
        <p>This product does not directly contribute to poor land use practices.</p>
      </div>
      <div className="cause-details">
        <h3>LABOR LAWS</h3>
        <p>Because of multiple parts origin we cannot say with certainty that this product is labor friendly.</p>
      </div>
      <div className="cause-details">
        <h3>POLITICAL</h3>
        <p>This product does not contribute to geopolitical stratification of resources.</p>
      </div>
    </div>
  )
}
