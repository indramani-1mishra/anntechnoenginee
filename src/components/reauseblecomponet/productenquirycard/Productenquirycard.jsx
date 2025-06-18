import React, { useContext,} from "react";
import "./ProductInquiryCard.css";
import SearchContext from "../../../context/context";
import { IoClose } from "react-icons/io5";
//import { LuIndianRupee } from "react-icons/lu";

const ProductInquiryCard = ({ image,  model, onSubmit,name }) => {
    const { setshowenquiry,showenquiry,}=useContext(SearchContext);
  
  return (
    <>
       {
        showenquiry &&  <div className="product-card">
            
      <div className="product-left">
        <img src={image} alt="image" className="product-img" />
        
        <ul className="product-model-list">
          <li><strong>Brand:</strong> {model}</li>
         
          <li><strong>name</strong> {name}</li>
         
        </ul>
      </div>

      {/* Right Side - Inquiry Form */}
      <div className="product-right">
       
       <IoClose className="icon-close" onClick={()=>setshowenquiry(false)}/>
        <h3 className="form-title">Supplier wants to know more about you</h3>
        <form onSubmit={onSubmit} className="inquiry-form">
          <input type="text" placeholder="Enter your name"  name="name1"   required />
          <input type="email" placeholder="Enter your email" name="useremail"required />
          <input type="number" placeholder="Enter your mobile number" name="number"  required />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        <p className="form-note">You are just a click away from getting quotes</p>
      </div>
    </div>
   
       }
    </>
  );
};

export default ProductInquiryCard;
