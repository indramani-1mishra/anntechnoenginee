import React from 'react';
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
  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>

      <div className="details-container">
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="spec-row"><strong>Category:</strong> {product.category}</p>
          <p className="spec-row"><strong>Brand:</strong> {product.brand}</p>
          <p className="spec-row"><strong>Model Type:</strong> {product.modelType}</p>
          <p className="spec-row"><strong>Voltage:</strong> {product.voltage}</p>
          <p className="spec-row"><strong>Application:</strong> {product.application}</p>
          <p className="spec-row"><strong>Material:</strong> {product.material}</p>
          <p className="spec-row"><strong>Min. Order Qty:</strong> {product.minOrderQty}</p>
          <p className="spec-row"><strong>Capacity:</strong> {product.capacity}</p>
          <p className="spec-row"><strong>Usage:</strong> {product.usage}</p>
          <p className="spec-row"><strong>Price:</strong> ₹{product.price}</p>

          <p><strong>Features:</strong></p>
          <ul>
            {Array.isArray(product.features)
              ? product.features.map((feat, i) => <li key={i}>{feat}</li>)
              : <li>{product.features}</li>
            }
          </ul>
        </div>

        {product.technicalSpecs && Object.keys(product.technicalSpecs).length > 0 && (
          <div className="technical-specs">
            <h3>Technical Specifications</h3>
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
