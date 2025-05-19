import React, { useContext, useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import './logo.css';
import Logincontainer from '../logincontainer/logincontainer';
import { useNavigate } from 'react-router-dom';
import SearchContext from '../../../context/context';
import { IoMdAddCircleOutline } from "react-icons/io";
export default function Logocontainer() {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const { count } = useContext(SearchContext);

  const onclickhandler = () => {
    navigate('/carts');
  };

  return (
    <div className='logoconatainer'>
      
      {/* Profile + Login dropdown */}
      <div
        className='logos profile-container'
        tabIndex="0"
        aria-haspopup="true"
        aria-expanded={showLogin}
        onMouseEnter={() => setShowLogin(true)}
        onMouseLeave={() => setShowLogin(false)}
      >
        <span><FaRegUser style={{ fontSize: "20px" }} /></span>
        <span>Profile</span>
        {showLogin && (
          <div className="login-popup">
            <Logincontainer />
          </div>
        )}
      </div>

      {/* Wishlist */}
      <div className='logos' onClick={()=>navigate('/Addproducts')}>
        <span><IoMdAddCircleOutline style={{ fontSize: "20px" }} /></span>
        <span>Add products</span>
      </div>

      {/* Cart/Bag */}
      <div className='logos' onClick={onclickhandler}>
        <span className='count'>{count}</span>
        <span><MdOutlineShoppingBag style={{ fontSize: "20px" }} /></span>
        <span>Bag</span>
      </div>
      
    </div>
  );
}
