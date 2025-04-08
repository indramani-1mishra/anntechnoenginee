import React, { useEffect, useState } from 'react';
import './productdetails.css';
import { useParams } from 'react-router-dom';
import Usefetchapi from '../../customhooks/Usefetchapi';
import Reuseablecompont from '../../reauseblecomponet/reuseablecompont';

export default function Productdetails() {
  const { id } = useParams();

  // Fetch individual product
  const { response: productResponse } = Usefetchapi(`https://mytrabackendclone-3.onrender.com/api/v1/products/${id}`);
  const product = productResponse?.data;

  const [relatedProducts, setRelatedProducts] = useState([]);

  // Fetch related products after product is available
  useEffect(() => {
    const fetchRelated = async () => {
      if (product && product.category) {
        try {
          const res = await fetch(`https://mytrabackendclone-3.onrender.com/api/v1/products/category/${product.category}`);
          const json = await res.json();
          if (json?.data && Array.isArray(json.data)) {
            // Exclude current product from related list
            const filtered = json.data.filter(item => item._id !== product._id);
            setRelatedProducts(filtered);
          }
        } catch (err) {
          console.error("Error fetching related products:", err);
        }
      }
    };

    fetchRelated();
  }, [product]);

  // Show loading until product data is available
  if (!productResponse || !product) {
    return <p className="loading">Loading product...</p>;
  }

  return (
    <>
      <div className="product-details-container">
        <div className="product-image">
          <img src={product.image} alt={product.description} />
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
          <button className="buy-now-btn">Add to Cart</button>
        </div>
      </div>

      <h3 className="related-title">Related Products</h3>
      <Reuseablecompont data={relatedProducts} />
    </>
  );
}
