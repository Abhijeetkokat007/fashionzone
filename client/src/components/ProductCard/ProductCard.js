import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({id,image, title, description,price,brand}) {
 
  return (
    <div>
      <div className="productcard-container">
                <img className="img-card" src={image} />
                <h3 className='card-title'> {title} </h3>
                <p className="card-description"> {description} </p>
                <p className="card-price">RS: ₹{price}</p>
                <p>{brand}</p>
                <Link to={`/buy/${id}`} className="btn btn-card">Buy Now</Link>
              </div>
    </div>
  )
}

export default ProductCard
