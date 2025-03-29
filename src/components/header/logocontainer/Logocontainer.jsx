import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import './logo.css';
import Logincontainer from '../logincontainer/logincontainer';

export default function Logocontainer() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className='logoconatainer'>
      <div 
        className='logos profile-container'
        onMouseEnter={() => setShowLogin(true)}
        onMouseLeave={() => setShowLogin(false)}
      >
        <span><FaRegUser style={{ fontSize: "20px" }} /></span>
        <span>Profile</span>
        {showLogin && <Logincontainer />}
      </div>

      <div className='logos'>
        <span><CiHeart style={{ fontSize: "20px" }} /></span>
        <span>Wishlist</span>
      </div>

      <div className='logos'>
        <span><MdOutlineShoppingBag style={{ fontSize: "20px" }} /></span>
        <span>Bag</span>
      </div>
    </div>
  );
}
