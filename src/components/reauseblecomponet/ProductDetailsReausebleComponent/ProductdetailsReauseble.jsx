import { VscCallOutgoing } from "react-icons/vsc";
import { MdAddCall, MdEmail } from 'react-icons/md';
import './productdetails.css';
import React from 'react';

export default function ProductdetailsReauseble({ product,  onclickhandler1 }) {


  return (
    <>
      <div className="product-details-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} loading='lazy' />
        </div>
        <div className="product-info">
          <h2>{product.name}</h2>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Model:</strong> {product.modelType}</p>
          <p><strong>Application:</strong> {product.application}</p>
          <p><strong>Material:</strong> {product.material}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Min. Order Qty:</strong> {product.minOrderQty}</p>
          <p><strong>Capacity:</strong> {product.capacity}</p>
          <p><strong>Voltage:</strong> {product.voltage}</p>
          <p><strong>Usage:</strong> {product.usage}</p>
          <p><strong>Price:</strong> ₹{product.price}</p>
          
          
          
          <p>
            <ul>
              {Array.isArray(product.features) ? (
                product.features.map((feat, index) => (
                  <li key={index}>{feat}</li>
                ))
              ) : (
                <li>{product.features}</li>
              )}
            </ul>
          </p>

          <button className="buy-now-btn" onClick={onclickhandler1}>Send Enquiry </button>
          <button className="buy-now-btn"><a href='tel:+91 88511 48551'>call now </a></button>
        </div>
      </div>
    </>
  );
}
