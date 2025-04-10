import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './Addtocart.css';
import SearchContext from '../../../../context/context';

export default function Carts() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const {setcount}=useContext(SearchContext);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const res = await axios.get('https://mytrabackendclone-3.onrender.com/api/v1/cart', {
          withCredentials: true,
        });


        const items = res.data?.data?.items || [];
        setCartItems(items);
        setcount(items.length);
        
      } catch (error) {
        console.error(' Error fetching cart items:', error);
        setCartItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleBuyNow = (item) => {
    alert(`Buying: ${item.product.productname} (₹${item.product.price})`);
    // Example: navigate(`/checkout/${item._id}`);
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item._id}>
                <img
                  src={item.product.image}
                  alt={item.product.productname}
                  className="cart-img"
                />
                <div className="cart-details">
                  <h3>{item.product.productname}</h3>
                  <p>Price: ₹{item.product.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button className="buy-now-btn" onClick={() => handleBuyNow(item)}>
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Total Price Display */}
          <div className="total-price-box">
            <h3>Total Price:</h3>
            <p>₹{totalPrice}</p>
          </div>
        </>
      )}
    </div>
  );
}
