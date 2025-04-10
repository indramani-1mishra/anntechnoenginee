import React, { useContext, useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import './logo.css';
import Logincontainer from '../logincontainer/logincontainer';
import { useNavigate } from 'react-router-dom';
import SearchContext from '../../../context/context';

export default function Logocontainer() {
  const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();
     const {count} =useContext(SearchContext);
    const onclickhandler=()=>
    {
      navigate('/carts');
    }
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

      <div className='logos' onClick={onclickhandler}>
        <span className='count'>{count}</span>
        <span><MdOutlineShoppingBag style={{ fontSize: "20px" }} /></span>
        <span>Bag</span>

      </div>
    </div>
  );
}
