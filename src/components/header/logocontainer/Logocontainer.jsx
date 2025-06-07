import React, { useContext, useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiHeart, CiMail } from "react-icons/ci";
import './logo.css';
import Logincontainer from '../logincontainer/logincontainer';
import { useNavigate } from 'react-router-dom';
import SearchContext from '../../../context/context';
import { IoMdAddCircleOutline } from "react-icons/io";
export default function Logocontainer() {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const { count ,isloggedin,setshowemail , } = useContext(SearchContext);

  const onclickhandler = () => {
    navigate('/carts');
  };

  return (
    <div className='logoconatainer'>
      
      {/* Profile + Login dropdown */}
      <div
        className='logos profile-container'
       
        
      >
        <span><FaRegUser style={{ fontSize: "20px" }} onClick={()=>navigate('/userdetails')} /></span>
        <span>Profile</span>
        {showLogin && (
          <div className="login-popup">
            <Logincontainer />
          </div>
        )}
      </div>

      {/* Wishlist */}
      <div className='logos' >
       {
         isloggedin  ? <>
          <span><IoMdAddCircleOutline style={{ fontSize: "20px" }}  onClick={()=>navigate('/Addproducts')}/></span>
        <span>Add products</span>
         </>:<>
           <span><CiMail style={{ fontSize: "20px" }}  onClick={()=>setshowemail(true)}/></span>
        <span>send Enquiry</span>
         </>
       }
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
