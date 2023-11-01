import React from 'react'
import './ProductCard.css';

function ProductCard({image, title, description,price,brand}) {
  return (
    <div>
      <div className="productcard-container">
                <img className="img-card" src={image} />
                <h3> {title} </h3>
                <p className="card-description"> {description} </p>
                <p className="card-price">RS: ₹{price}</p>
                <p>{brand}</p>
                <button className="btn btn-card">Buy Now</button>
              </div>
    </div>
  )
}

export default ProductCard
