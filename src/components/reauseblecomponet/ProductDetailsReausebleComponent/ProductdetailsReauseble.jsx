import './productdetails.css';
import React from 'react'

export default function ProductdetailsReauseble({product,onclickhandler}) {
  return (
    <>
         <div className="product-details-container">
        <div className="product-image">
          <img src={product.image} alt={product.description} loading='lazy' />
        </div>
        <div className="product-info">
          <h2>{product.productname}</h2>
          <p className="description">{product.description}</p>
          <p><strong>Price:</strong> ₹{product.price}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>In Stock:</strong> {product.instock ? 'Yes' : 'No'}</p>
          <p><strong>Quantity:</strong> {product.quantity}</p>
          <p><strong>Rating:</strong> {product.rating}⭐</p>
          <button className="buy-now-btn">Buy Now</button>
          <button className="buy-now-btn" onClick={onclickhandler}>Add to Cart</button>
        </div>
      </div>
    </>
  )
}
