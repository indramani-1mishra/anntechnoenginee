import React, { useContext, useState, useEffect } from 'react';
import './Addtocart.css';
import withLogin from '../../../hoc/withloggin/Withloggin';
import SearchContext from '../../../../context/context';
import CartItemList from '../../../reauseblecomponet/showcartreuseble/Showcartsreuseble';
import Loder from '../../../reauseblecomponet/loder/Loder';
import axios from 'axios';

function Carts() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setcount } = useContext(SearchContext);

  const fetchcartdata = async () => {
    try {
      const response = await axios.get('https://technoengnearbackend.onrender.com/api/v1/like', {
        withCredentials: true,
      });
      const likedProducts = response?.data?.data[0]?.likedProduct || [];
      console.log('likedProducts:', likedProducts);
      setCartItems(likedProducts);
      setcount(likedProducts.length);
    } catch (error) {
      console.log(error);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchcartdata();
  }, []);

  const handleBuyNow = (item) => {
    alert(`Buying: ${item.name} (₹${item.price})`);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price || 0), 0);

  const handleremoveToCart = async (item) => {
    try {
      const productid = item._id?.toString();
      console.log("Removing product ID:", productid);

      const response = await axios.delete(
        `https://technoengnearbackend.onrender.com/api/v1/like/unlike/${productid}`,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
       console.log(JSON.stringify(response.data.data.likedProduct));
      setCartItems(response.data.data.likedProduct || []);
      alert('Product removed');
    } catch (error) {
      console.error('Error removing product:', error.response?.data || error.message);
      alert(error.response?.data?.error || 'Failed to remove product.');
    }
  };

  useEffect(()=>{
    fetchcartdata();
  },[cartItems._id])
  if (loading) return <Loder />;

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <CartItemList items={cartItems} onBuyNow={handleBuyNow} onRemove={handleremoveToCart} />
          <div className="total-price-box">
            <h3>Total Price:</h3>
            <p>₹{totalPrice}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default withLogin(Carts);
