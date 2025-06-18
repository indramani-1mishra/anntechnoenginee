import React, { useContext, useState, useEffect } from 'react';
import './Addtocart.css';
import withLogin from '../../../hoc/withloggin/Withloggin';
import SearchContext from '../../../../context/context';
import CartItemList from '../../../reauseblecomponet/showcartreuseble/Showcartsreuseble';
import Loder from '../../../reauseblecomponet/loder/Loder';
import axios from 'axios';
import ProductInquiryCard from '../../../reauseblecomponet/productenquirycard/Productenquirycard';
import { sendEmail } from '../../../customhooks/SendEmail/Sendemail';
import { toast } from 'react-toastify';

function Carts() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setcount ,setshowemail,setshowenquiry,showenquiry,likedProducts, setLikedProducts} = useContext(SearchContext);
  const [enquerydata,setenquerydata]= useState(null);
  const [itemId,setItemId]=useState('');

  const fetchcartdata = async () => {
    try {
      const response = await axios.get('https://technoengnearbackend.onrender.com/api/v1/like', {
        withCredentials: true,
      });
      const likedProducts = response?.data?.data[0]?.likedProduct || [];
    
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
    setenquerydata(item);
    setshowenquiry(true);
  //  console.log(item);
   // console.log(enquerydata.product.images[0]);
  };
  const onSubmitHandler= (e)=>
  { 
     e.preventDefault();
     const {name1,useremail,number}=e.target;
     console.log(name1.value,useremail.value,number);
     sendEmail(
 enquerydata.product.name,
 useremail.value,
  name1.value,
  number.value,
  enquerydata.product.brand,
 enquerydata?.product?.images[0]
     );
     setshowenquiry(false);
  }

  //const totalPrice = cartItems.reduce((acc, item) => acc + (item.price || 0), 0);

  const handleremoveToCart = async (item) => {
  try {
    const productid = item._id?.toString();
    setItemId(productid);

    const response = await axios.delete(
      `https://technoengnearbackend.onrender.com/api/v1/like/unlike/${productid}`,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    toast.success(response.data.message);

    //  Update cartItems
    const updatedCartItems = response.data.data.likedProduct || [];
    setCartItems(updatedCartItems);
    setcount(updatedCartItems.length);

    //  Update likedProducts and localStorage
    if (updatedCartItems.length === 0) {
      // If no items left, clean up
      setLikedProducts({});
      localStorage.removeItem("likedIds");
    } else {
      const updatedLikes = { ...likedProducts };
      delete updatedLikes[productid];
      setLikedProducts(updatedLikes);
      localStorage.setItem("likedIds", JSON.stringify(updatedLikes));
    }

  } catch (error) {
    console.error('Error removing product:', error.response?.data || error.message);
    alert(error.response?.data?.error || 'Failed to remove product.');
  }
};


  useEffect(()=>{
    fetchcartdata();
  },[itemId])
  if (loading) return <Loder />;

  return (
    <div className="cart-container">
      <h2>likes products</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your likes products is empty</p>
      ) : (
        <>
          <CartItemList items={cartItems} onBuyNow={handleBuyNow} onRemove={handleremoveToCart} />
          
        </>
      )}

      {showenquiry && <ProductInquiryCard image={enquerydata?.product?.images[0]} name={enquerydata?.product?.name} model={enquerydata?.product?.brand} onSubmit={(e) => onSubmitHandler(e)}/>}
    </div>
  );
}

export default withLogin(Carts);
