import React, { useState } from 'react';
import { VscCallOutgoing } from "react-icons/vsc";
import { MdAddCall, MdEmail } from 'react-icons/md';
import './productdetails.css';

// 🔧 Function to format keys like "ceilingAirFlow" to "Ceiling Air Flow"
function formatLabel(key) {
  return key
    .replace(/([a-z])([A-Z])/g, '$1 $2')   // Split camelCase
    .replace(/_/g, ' ')                    // Replace underscores
    .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize each word
}

export default function ProductdetailsReusable({ product, onclickhandler1 }) {
  const [bigimage,setbigimage]= useState(product.images[0]);
  return (
    <div className="product-details-container">
      {product.image?  <div className="product-image">
       <img src={product.image} alt={product.name} loading="lazy" />
      
      </div>:<div className='product-image1'>
          <div className='big-image'>
           <img src={bigimage} alt={product.name} loading="lazy" />
          </div>
          <div className='small-image'>
           {product.images.map((image)=>{
            return <div className='image-con'><img src={image} alt={product.name} loading="lazy" onClick={()=>setbigimage(image)} key={image} /></div>
           })}
          </div>

      </div>}

      <div className="details-container">
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="spec-row"><strong>Category:</strong> {product.category}</p>
          <p className="spec-row"><strong>Brand:</strong> {product.brand}</p>
          <p className="spec-row"><strong>Min. Order Qty:</strong> {product.minOrderQty}</p>


          
        </div>

        {product.technicalSpecs && Object.keys(product.technicalSpecs).length > 0 && (
          <div className="technical-specs">
         
            <div className="spec-list">
              {Object.entries(product.technicalSpecs).map(([key, value]) => (
                <p className="spec-row" key={key}>
                  <span className="spec-label">{formatLabel(key)}</span>
                  <span className="spec-value">{value}</span>
                </p>
              ))}
            </div>
          </div>
        )}
        <p><strong>Features:</strong></p>
          <ul>
            {Array.isArray(product.features)
              ? product.features.map((feat, i) => <li key={i}>{feat}</li>)
              : <li>{product.features}</li>
            }
          </ul>
      </div>
      

      <div className="action-buttons">
        <button className="buy-now-btn" onClick={onclickhandler1}>
          Send Enquiry
        </button>
        <button className="buy-now-btn">
          <a href="tel:+918851148551">Call Now</a>
        </button>
      </div>
    </div>
  );
}
