import React, { useContext,  useState } from 'react';
import './Addtocart.css';
import withLogin from '../../../hoc/withloggin/Withloggin';
import SearchContext from '../../../../context/context';
import {useFetchCartItem} from '../../../customhooks/usefetchcartitem/UsefetchCartItem';
import CartItemList from '../../../reauseblecomponet/showcartreuseble/Showcartsreuseble';
import Loder from '../../../reauseblecomponet/loder/Loder';



function Carts() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setcount } = useContext(SearchContext);

  useFetchCartItem({
    url: 'https://mytrabackendclone-3.onrender.com/api/v1/cart',
    setCartItems,
    setcount,
    setLoading
  });

  const handleBuyNow = (item) => {
    alert(`Buying: ${item.product?.productname} (₹${item.product?.price})`);
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + (item.product?.price || 0) * item.quantity;
  }, 0);

  if (loading) return <Loder/>
  

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <CartItemList items={cartItems} onBuyNow={handleBuyNow} />

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
